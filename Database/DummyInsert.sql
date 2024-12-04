USE AutoMechanicsDB;

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