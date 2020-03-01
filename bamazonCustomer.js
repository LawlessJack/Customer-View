var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "bigjack1",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        database()
    })
});
function database() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("item id: "+res[i].item_id +  " | product name: " + res[i].product_name +  " | price: " + res[i].price);
        }
        console.log("-----------------------------------");
        bamazon()
    
    });

}

function bamazon() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
    inquirer
        .prompt([
            {
                name: "item",
                type: "input",
                message: "What is the ID of the item you would like to purchase?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units of the item would you like to buy ?"
            },

        ])
        .then(function (answer) {
                let chosenitem = res[(answer.item - 1)]
                console.log("stock quantity: " + chosenitem.stock_quantity);

                var newstockquantity = chosenitem.stock_quantity-answer.quantity

                if (chosenitem.stock_quantity >= answer.quantity) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: newstockquantity
                      },
                      {
                        item_id: answer.item
                      }
                    ],
                    function (err, result) {
                        if (err) throw err;
                        console.log(result.affectedRows + " record(s) updated");
                    });
                    console.log("Cost of purchase: " + answer.quantity * chosenitem.price)
                    
                    
                }
                else {
                    console.log("Insufficient quantity!")
                }
                connection.end()
            });
        })
}