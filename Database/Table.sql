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
