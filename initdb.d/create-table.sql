CREATE TABLE vending_machine (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    location_x DECIMAL(9,6) NOT NULL,
    location_y DECIMAL(9,6) NOT NULL,
    pay VARCHAR(10) NOT NULL
);

CREATE TABLE drinks (
    did INT AUTO_INCREMENT PRIMARY KEY,
    vid INT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (vid) REFERENCES vending_machine(id),
    temp VARCHAR(5) NOT NULL,
    category VARCHAR(20) NOT NULL
);

INSERT INTO vending_machine (address, location_x, location_y, pay)
VALUES 
('東京都中央区1-1-1', 35.6895, 139.6917, 'cash'),
('大阪市北区1-1-1', 34.6869, 135.5200, 'card');

INSERT INTO drinks (vid, product_name, price, temp, category)
VALUES 
(1, 'コーラ', 120.00, 'cold', 'soda'),
(1, 'お茶', 110.00, 'hot', 'tea'),
(2, 'コーヒー', 150.00, 'hot', 'coffee'),
(2, 'スプライト', 120.00, 'cold', 'soda');
