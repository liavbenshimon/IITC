// --  1) Items
// CREATE TABLE Items (
//     Code VARCHAR(10) PRIMARY KEY,
//     Description VARCHAR(255),
//     UnitPrice DECIMAL(10, 2),
//     Available INT,
//     Saved INT,
//     Waiting INT,
//     Subscript INT,
//     Freq INT,
//     SuppDate DATE,
//     OrderPercnt DECIMAL(5, 2)
// );
// INSERT INTO Items (Code, Description, UnitPrice, Available, Saved, Waiting, Subscript, Freq, SuppDate, OrderPercnt)
// VALUES 
// ('ITM001', 'Laptop', 1200.00, 50, 5, 10, 2, 7, '2024-09-01', 15.00),
// ('ITM002', 'Smartphone', 800.00, 100, 10, 20, 5, 14, '2024-09-05', 10.00),
// ('ITM003', 'Tablet', 500.00, 30, 3, 5, 1, 21, '2024-09-10', 8.00);

// -- 2) Customers 

// CREATE TABLE Customers (
//     CustID VARCHAR(10) PRIMARY KEY,
//     CustType VARCHAR(50),
//     CustStatus VARCHAR(50),
//     FreezCode VARCHAR(10),
//     OverCount INT,
//     CustName VARCHAR(255),
//     DelivAddress VARCHAR(255),
//     MailAddress VARCHAR(255),
//     CreditCard VARCHAR(20)
// );
// INSERT INTO Customers (CustID, CustType, CustStatus, FreezCode, OverCount, CustName, DelivAddress, MailAddress, CreditCard)
// VALUES 
// ('CST001', 'Regular', 'Active', NULL, 0, 'John Doe', '123 Main St', 'john@example.com', '4111111111111111'),
// ('CST002', 'VIP', 'Active', NULL, 0, 'Jane Smith', '456 Elm St', 'jane@example.com', '4222222222222222'),
// ('CST003', 'Regular', 'Inactive', 'FZ001', 1, 'Bob Johnson', '789 Oak St', 'bob@example.com', '4333333333333333');

// -- 3) ExOrders 

// CREATE TABLE ExOrders (
//     OrderNo VARCHAR(10) PRIMARY KEY,
//     Date DATE,
//     CustID VARCHAR(10),
//     Code VARCHAR(10),
//     Quant INT,
//     Delivery VARCHAR(10),
//     Address VARCHAR(255),
//     Status VARCHAR(50),
//     SuppDate DATE,
//     FOREIGN KEY (CustID) REFERENCES Customers(CustID),
//     FOREIGN KEY (Code) REFERENCES Items(Code)
// );
// INSERT INTO ExOrders (OrderNo, Date, CustID, Code, Quant, Delivery, Address, Status, SuppDate)
// VALUES 
// ('ORD001', '2024-08-01', 'CST001', 'ITM001', 2, 'DLV001', '123 Main St', 'Pending', '2024-09-01'),
// ('ORD002', '2024-08-05', 'CST002', 'ITM002', 3, 'DLV002', '456 Elm St', 'Shipped', '2024-09-05'),
// ('ORD003', '2024-08-10', 'CST003', 'ITM003', 1, 'DLV003', '789 Oak St', 'Delivered', '2024-09-10');

// -- 4) Invoices 

// CREATE TABLE Invoices (
//     InvNo VARCHAR(10) PRIMARY KEY,
//     Date DATE,
//     OrderNo VARCHAR(10),
//     UnitDesc VARCHAR(255),
//     NoUnits INT,
//     UnitPrice DECIMAL(10, 2),
//     TotAmount DECIMAL(10, 2),
//     FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo)
// );
// INSERT INTO Invoices (InvNo, Date, OrderNo, UnitDesc, NoUnits, UnitPrice, TotAmount)
// VALUES 
// ('INV001', '2024-08-02', 'ORD001', 'Laptop', 2, 1200.00, 2400.00),
// ('INV002', '2024-08-06', 'ORD002', 'Smartphone', 3, 800.00, 2400.00),
// ('INV003', '2024-08-11', 'ORD003', 'Tablet', 1, 500.00, 500.00);

// -- 5)Subscription 

// CREATE TABLE Subscription (
//     OrderNo VARCHAR(10) PRIMARY KEY,
//     Status VARCHAR(50),
//     CustID VARCHAR(10),
//     Code VARCHAR(10),
//     Quant INT,
//     Freq INT,
//     Delivery VARCHAR(10),
//     NextOrder DATE,
//     Expiration DATE,
//     FOREIGN KEY (CustID) REFERENCES Customers(CustID),
//     FOREIGN KEY (Code) REFERENCES Items(Code)
// );

// INSERT INTO Subscription (OrderNo, Status, CustID, Code, Quant, Freq, Delivery, NextOrder, Expiration)
// VALUES 
// ('SUB001', 'Active', 'CST001', 'ITM001', 2, 30, 'DLV001', '2024-09-30', '2024-12-31'),
// ('SUB002', 'Active', 'CST002', 'ITM002', 1, 15, 'DLV002', '2024-09-15', '2024-12-31'),
// ('SUB003', 'Inactive', 'CST003', 'ITM003', 1, 60, 'DLV003', '2024-10-10', '2024-12-31');

// -- 6) Receipt 

// CREATE TABLE Receipt (
//     RecNo VARCHAR(10) PRIMARY KEY,
//     PymtDate DATE,
//     InvNo VARCHAR(10),
//     OrderNo VARCHAR(10),
//     PaidAmt DECIMAL(10, 2),
//     FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo),
//     FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo)
// );
// INSERT INTO Receipt (RecNo, PymtDate, InvNo, OrderNo, PaidAmt)
// VALUES 
// ('REC001', '2024-08-02', 'INV001', 'ORD001', 2400.00),
// ('REC002', '2024-08-06', 'INV002', 'ORD002', 2400.00),
// ('REC003', '2024-08-11', 'INV003', 'ORD003', 500.00);

// -- 7) Accounting

// CREATE TABLE Accounting (
//     Date DATE,
//     Amount DECIMAL(10, 2),
//     CrdtDebt DECIMAL(10, 2),
//     InvNo VARCHAR(10),
//     OrderNo VARCHAR(10),
//     ReceiptNo VARCHAR(10),
//     PRIMARY KEY (InvNo, OrderNo, ReceiptNo),
//     FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo),
//     FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
//     FOREIGN KEY (ReceiptNo) REFERENCES Receipt(RecNo)
// );
// INSERT INTO Accounting (Date, Amount, CrdtDebt, InvNo, OrderNo, ReceiptNo)
// VALUES 
// ('2024-08-02', 2400.00, 0.00, 'INV001', 'ORD001', 'REC001'),
// ('2024-08-06', 2400.00, 0.00, 'INV002', 'ORD002', 'REC002'),
// ('2024-08-11', 500.00, 0.00, 'INV003', 'ORD003', 'REC003');

// -- 8) StockOrder 

// CREATE TABLE StockOrder (
//     OrderNo VARCHAR(10) PRIMARY KEY,
//     StockDate DATE,
//     Code VARCHAR(10),
//     Descr VARCHAR(255),
//     Quant INT,
//     FOREIGN KEY (Code) REFERENCES Items(Code)
// );
// INSERT INTO StockOrder (OrderNo, StockDate, Code, Descr, Quant)
// VALUES 
// ('STO001', '2024-07-25', 'ITM001', 'Laptop', 10),
// ('STO002', '2024-07-30', 'ITM002', 'Smartphone', 20),
// ('STO003', '2024-08-05', 'ITM003', 'Tablet', 15);

// -- 9) DeliveryFees 
// CREATE TABLE DeliveryFees (
//     Delivery VARCHAR(10) PRIMARY KEY,
//     Description VARCHAR(255),
//     DelFee DECIMAL(10, 2)
// );
// INSERT INTO DeliveryFees (Delivery, Description, DelFee)
// VALUES 
// ('DLV001', 'Standard Delivery', 50.00),
// ('DLV002', 'Express Delivery', 100.00),
// ('DLV003', 'Overnight Delivery', 150.00);

// -- 10) Discounts 

// CREATE TABLE Discounts (
//     CustType VARCHAR(50) PRIMARY KEY,
//     Discnt DECIMAL(5, 2)
// );
// INSERT INTO Discounts (CustType, Discnt)
// VALUES 
// ('Regular', 5.00),
// ('VIP', 10.00);

// -- 11) Numbers 

// CREATE TABLE Numbers (
//     LastOrder INT,
//     LastSubsc INT,
//     LastStock INT,
//     LastReceipt INT,
//     LastInvoice INT
// );
// INSERT INTO Numbers (LastOrder, LastSubsc, LastStock, LastReceipt, LastInvoice)
// VALUES 
// (3, 3, 3, 3, 3);

// -- 12) Profiles 

// CREATE TABLE Profiles (
//     Profile VARCHAR(50) PRIMARY KEY,
//     Act VARCHAR(50)
// );
// INSERT INTO Profiles (Profile, Act) VALUES
// ('Admin', 'Full Access'),
// ('Sales', 'View and Edit Sales'),
// ('Warehouse', 'Manage Inventory'),
// ('CustomerService', 'View and Manage Orders');

// -- 13) Users 

// CREATE TABLE Users (
//     UserName VARCHAR(50) PRIMARY KEY,
//     Profile VARCHAR(50),
//     FOREIGN KEY (Profile) REFERENCES Profiles(Profile)
// );
// INSERT INTO Users (UserName, Profile) VALUES
// ('johndoe', 'Admin'),
// ('janedoe', 'Sales'),
// ('warehouse_mgr', 'Warehouse'),
// ('cust_service1', 'CustomerService');
//
//
// 
// 
// 
// 
// 
// 
// 
// 
// Queries
// -- 6.1


// SELECT 
//     i.Subscript, 
//     i.Freq, 
//     i.Code, 
//     i.Description AS ItemDescription, 
//     i.Available, 
//     i.Saved, 
//     i.Waiting, 
//     i.Freq, 
//     i.SuppDate, 
//     i.OrderPercnt
// FROM 
//     Items i
// WHERE 
//     i.Code = 'ITM001'; -- החלף את 'ITM001' בקוד הפריט הספציפי שאתה מחפש


// -- 6.2

// SELECT 
//     e.OrderNo,
//     e.Date AS OrderDate,
//     SUM(e.Quant * i.UnitPrice) AS OrderAmount,
//     STRING_AGG(i.Description, ', ') AS Items,
//     e.Status
// FROM 
//     ExOrders e
// JOIN 
//     Items i ON e.Code = i.Code
// GROUP BY 
//     e.OrderNo, e.Date, e.Status
// ORDER BY 
//     e.Date;


// -- 6.3

// SELECT 
//     C.CustID AS CustomerID,
//     C.CustName AS CustomerName,
//     C.CustStatus AS CustomerStatus,
//     S.OrderNo AS SubscriptionOrderNo,
//     S.Status AS OrderStatus,
//     S.Code AS ItemCode,
//     I.Description AS ItemDescription,
//     S.Quant AS QuantityOrdered,
//     S.Freq AS OrderFrequency
// FROM 
//     Customers C
// JOIN 
//     Subscription S ON C.CustID = S.CustID
// JOIN 
//     Items I ON S.Code = I.Code
// WHERE 
//        C.CustID IN ('CST001', 'CST002', 'CST003');

// -- 6.4		

// SELECT 
//     A.Date AS TransactionDate,
//     A.OrderNo AS OrderNumber,
//     A.ReceiptNo AS ReceiptNumber,
//     R.PymtDate AS PaymentDate,
//     SUM(A.CrdtDebt) AS CreditAmount,    -- the amount of revenue
//     SUM(A.Amount) AS DebitAmount,       -- the amount of expenses
//     SUM(A.CrdtDebt) - SUM(A.Amount) AS Balance -- the balance
// FROM 
//     Accounting A
// JOIN 
//     Receipt R ON A.ReceiptNo = R.RecNo
// WHERE 
//     A.Date = '2024-08-02'  -- Date to choose
// GROUP BY 
//     A.Date, A.OrderNo, A.ReceiptNo, R.PymtDate;

// --6.5

// SELECT
//     eo.Date AS OrderDate,
//     eo.SuppDate AS DeliveryDate,
//     SUM(i.TotAmount) AS OrderAmount,
//     eo.Status AS OrderStatus
// FROM
//     ExOrders eo
// LEFT JOIN
//     Invoices i ON eo.OrderNo = i.OrderNo
// WHERE
//     eo.Status IN ('Unfulfilled', 'Not delivered')
// GROUP BY
//     eo.Date, eo.SuppDate, eo.Status
// ORDER BY
//     eo.SuppDate;





























