CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  description VARCHAR(255) DEFAULT NULL
);
CREATE TABLE IF NOT EXISTS cart (
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  PRIMARY KEY (product_id),
  CONSTRAINT fk_cart_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
CREATE TABLE IF NOT EXISTS wishlist (
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  CONSTRAINT fk_wishlist_product FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);
INSERT INTO products (name, category, price, image_url, description) VALUES
('Red Shirt','Clothing',20.00,'/productImages/product1.JPEG','Cotton tee'),
('Porsche','Cars',50000.00,'/productImages/product2.JPEG','Sports car'),
('Ferrari','Cars',80000.00,'/productImages/product3.JPEG','Supercar'),
('Chair','Furniture',150.00,'/productImages/product4.JPEG','Comfort chair'),
('Cap','Clothing',10.00,'/productImages/product5.JPEG','Casual cap'),
('Headphones','Electronics',25.00,'/productImages/product6.JPEG','Wired headphones'),
('Jacket','Sportswear',45.00,'/productImages/product7.JPEG','Warm jacket'),
('Nintendo Switch','Electronics',210.00,'/productImages/product8.JPEG','Gaming console'),
('Smartphone','Electronics',220.00,'/productImages/product9.JPEG','Android phone'),
('Converse','Clothing',55.00,'/productImages/product10.JPEG','Sneakers');
