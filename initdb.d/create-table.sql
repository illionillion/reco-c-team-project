CREATE TABLE vending_machine (
    id INT AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) NOT NULL,
    location_x DECIMAL(9,6) NOT NULL,
    location_y DECIMAL(9,6) NOT NULL,
    pay VARCHAR(10) NOT NULL CHECK (pay IN ('cash', 'cashress'))
);

CREATE TABLE drinks (
    did INT AUTO_INCREMENT PRIMARY KEY,
    vid INT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL CHECK (price >= 0),
    FOREIGN KEY (vid) REFERENCES vending_machine(id),
    temp VARCHAR(5) NOT NULL CHECK (temp IN ('hot', 'cold')),
    category VARCHAR(20) NOT NULL CHECK (category IN ('soda', 'sports', 'can', 'tea', 'coffee', 'water', 'juice', 'energy'))
);

INSERT INTO vending_machine (address, location_x, location_y, pay)
VALUES 
('東京都中央区1-1-1', 35.6895, 139.6917, 'cash'),
('大阪市北区1-1-1', 34.6869, 135.5200, 'cashress'),
('東京都目黒区上目黒3-36-22', 35.643632, 139.692198, 'cashress'),
('東京都目黒区上目黒3-36-24', 35.643720, 139.692427, 'cash'),
('東京都渋谷区渋谷2-16-1', 35.659781, 139.705413, 'cashress'),
('東京都渋谷区渋谷1-8', 35.660184, 139.705661, 'cashress'),
('東京都渋谷区渋谷1-9', 35.659948, 139.704684, 'cashress'),
('東京都渋谷区渋谷1-9', 35.660605, 139.704646, 'cash'),
('東京都渋谷区渋谷1-10-15', 35.659139, 139.705252, 'cash'),
('東京都渋谷区渋谷1-12-13', 35.660614, 139.703841, 'cashress'),
('東京都渋谷区渋谷1-18-20', 35.661250, 139.704388, 'cashress'),
('東京都渋谷区渋谷2-10-10', 35.659908, 139.706347, 'cashress'),
('東京都渋谷区渋谷2-13', 35.658598, 139.706171, 'cashress'),
('東京都渋谷区渋谷2-18', 35.659404, 139.704542, 'cashress');

INSERT INTO drinks (vid, product_name, price, temp, category)
VALUES 
(1, 'コーラ', 120.00, 'cold', 'soda'),
(1, 'お茶', 110.00, 'hot', 'tea'),
(2, 'コーヒー', 150.00, 'hot', 'coffee'),
(2, 'スプライト', 120.00, 'cold', 'soda'),
(1, 'ウォーター', 80.00, 'cold', 'water'),
(2, 'グリーンティー', 130.00, 'hot', 'tea'),
(1, 'オレンジジュース', 140.00, 'cold', 'juice'),
(2, 'ラテ', 180.00, 'hot', 'coffee'),
(1, 'レモンティー', 125.00, 'cold', 'tea'),
(2, 'アイスコーヒー', 160.00, 'cold', 'coffee'),
(1, 'ジンジャーエール', 130.00, 'cold', 'soda'),
(2, 'ミルクティー', 140.00, 'hot', 'tea'),
(1, 'アイスティー', 115.00, 'cold', 'tea'),
(2, 'エナジードリンク', 200.00, 'cold', 'energy'),
(1, 'カプチーノ', 170.00, 'hot', 'coffee');
