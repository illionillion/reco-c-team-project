CREATE TABLE vending_machine (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    location_x DECIMAL(9,6) NOT NULL,
    location_y DECIMAL(9,6) NOT NULL,
    pay VARCHAR(10) NOT NULL,
);

CREATE TABLE drinks (
    did INT AUTO_INCREMENT PRIMARY KEY,
    vid INT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (vid) REFERENCES vending_machine(id),
    temp VARCHAR(5) NOT NULL,
    category VARCHAR(20) NOT NULL,
);
