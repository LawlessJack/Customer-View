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
            let quantity = res[i].stock_quantity;
            let itemID = res[i].item_id;
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        }
        console.log("-----------------------------------");
        bamazon(quantity)
    });
    
}

function bamazon(quantityhold) {
    // prompt for info about the item being put up for auction
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
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info

        if (answer.quantity <= quantityhold){
            console.log("it works!")
        }
        else{
            console.log(quantityhold)
        }
          
        connection.end()
      });
}