DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
	item_id int not null auto_increment,
    product_name varchar(50) not null,
    department_name varchar(50) not null,
    price DECIMAL not null,
    stock_quantity int not null,
    primary key(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toothpaste", "bathroom", 3.29, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cereal", "foods", 2.59, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("headphones", "electronics", 20.00, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "electronics", 450.00, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "electronics", 799.99, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("crackers", "foods", 1.19, 33);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shower curtain", "bathroom", 3.29, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("water bottle", "all", 15.99, 11);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bicycle", "all", 500.00, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("floss", "bathroom", 1.29, 88);
