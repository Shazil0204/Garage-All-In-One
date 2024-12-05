-- Create Database
CREATE DATABASE AutoMechanicsDB;
USE AutoMechanicsDB;

-- Create Users Table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_admin BOOLEAN DEFAULT FALSE
);

-- Create Items Table
CREATE TABLE Items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    min_quantity INT NOT NULL,
    description TEXT,
    item_link VARCHAR(255),
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create Cars Table
CREATE TABLE Cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    model VARCHAR(255),
    vin VARCHAR(17) NOT NULL UNIQUE,
    license_plate VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    image_path VARCHAR(255),
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    deadline DATETIME,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Create Issues Table
CREATE TABLE Issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    video_path VARCHAR(255),
    deadline DATETIME,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    car_id INT NOT NULL,
    FOREIGN KEY (car_id) REFERENCES Cars(id) ON DELETE CASCADE
);

-- Create Item-Location Table
CREATE TABLE `Item-Location` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    is_basement BOOLEAN DEFAULT FALSE,
    `column` INT NOT NULL,
    `row` INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES Items(id) ON DELETE CASCADE
);

-- Create Invoice Table
CREATE TABLE Invoice (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    total_price DECIMAL(8,2),
    issue_id INT NOT NULL,
    FOREIGN KEY (issue_id) REFERENCES Issues(id) ON DELETE CASCADE
);

-- Create Invoice-Item Table
CREATE TABLE `Invoice-Item` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT NOT NULL,
    invoice_id INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES Items(id) ON DELETE CASCADE,
    FOREIGN KEY (invoice_id) REFERENCES Invoice(id) ON DELETE CASCADE
);

-- Create User-Issue Table
CREATE TABLE `User-Issue` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    issue_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (issue_id) REFERENCES Issues(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE Notes (
	 id INT AUTO_INCREMENT PRIMARY KEY,
	 name VARCHAR(255) NOT NULL,
	 description TEXT,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
	 user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Insert Dummy Data into Users Table
INSERT INTO Users (name, username, password, email, is_admin) VALUES
('John Doe', 'johndoe', 'password123', 'john@example.com', TRUE),
('Jane Smith', 'janesmith', 'secure456', 'jane@example.com', FALSE);

-- Insert Dummy Data into Items Table
INSERT INTO Items (name, image_path, quantity, price, min_quantity, description, item_link) VALUES
('Brake Pads', '/images/brake.jpg', 50, 29.99, 10, 'High-quality brake pads.', 'www.parts.com/brake'),
('Oil Filter', '/images/oil.jpg', 100, 9.99, 20, 'Durable oil filter.', 'www.parts.com/oil');

-- Insert Dummy Data into Cars Table
INSERT INTO Cars (name, model, vin, license_plate, description, image_path, deadline, user_id) VALUES
('Toyota Corolla', '2020 Hybrid', '1HGCM82633A111', 'ABC-1234', 'Needs oil change.', '/images/car1.jpg', '2024-12-10 15:00:00', 2),
('Honda Accord', '2019 Sedan', '1HGCM82633A222', 'XYZ-5678', 'Replace brake pads.', '/images/car2.jpg', '2024-12-12 12:00:00', 1);

-- Insert Dummy Data into Issues Table
INSERT INTO Issues (name, description, video_path, deadline, car_id) VALUES
('Oil Leak', 'Check for oil leak.', '/videos/oil.mp4', '2024-12-08 10:00:00', 1),
('Brake Failure', 'Replace brake pads.', '/videos/brake.mp4', '2024-12-09 14:00:00', 2);

-- Insert Dummy Data into Item-Location Table
INSERT INTO `Item-Location` (item_id, is_basement, `column`, `row`) VALUES
(1, TRUE, 5, 2),
(2, FALSE, 3, 1);

-- Insert Dummy Data into Invoice Table
INSERT INTO Invoice (name, description, total_price, issue_id) VALUES
('Invoice #1001', 'Repair Oil Leak.', 59.98, 1),
('Invoice #1002', 'Replace Brake Pads.', 89.97, 2);

-- Insert Dummy Data into Invoice-Item Table
INSERT INTO `Invoice-Item` (item_id, invoice_id) VALUES
(1, 2),
(2, 1);

-- Insert Dummy Data into User-Issue Table
INSERT INTO `User-Issue` (issue_id, user_id) VALUES
(1, 2),
(2, 1);

INSERT INTO Notes (name, description, user_id ) VALUES 
('Kim Lee', 'Hey my name is Kim Lee and i am son of Lee Kim. Yes it is a while true loop', 1),
('Lee Kim', 'Hey my name is Lee Kim and i am son of Kim Lee. Yes it is a while true loop', 2);