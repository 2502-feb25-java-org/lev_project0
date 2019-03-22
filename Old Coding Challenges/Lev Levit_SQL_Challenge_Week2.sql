--Week 3 coding challenge
--Date 3-11-19
--SQL Assessment

--creating table Products
create table Products (
ID int identity(1,1) primary key,
Name varchar(50),
Price decimal(6,2)
);

--creating table Customers
create table Customers (
ID int identity(1,1) primary key,
FirstName varchar(50),
LastName varchar(50),
CardNumber bigint
);

--creating table Orders
create table Orders (
ID int identity(1,1) primary key,
ProductID int,
CustomerID int,
);

--adding 3 products
insert into Products (Name, Price)
values
('Widget', 5),
('Thingy', 2),
('Stick', 1);

--adding 3 customers
insert into Customers (FirstName, LastName, CardNumber)
values
('Lev', 'Levit', 34325221453),
('Bob', 'Bobit', 24743423532),
('Egan', 'Rights', 7095335321);

--adding orders
insert into Orders (ProductID, CustomerID)
values
(1, 1),
(1, 3),
(2, 2),
(3, 1),
(3, 2);

--add iPhone to Products
insert into Products (Name, Price)
values
('iPhone', 200);

--add Tine Smith to Customers
insert into Customers (FirstName, LastName, CardNumber)
values
('Tina', 'Smith', 5342423643);

-- adding order where Tina bought an iPhone
insert into Orders (ProductID, CustomerID)
values
(4, 4);

--report all orders by Tina
select C.FirstName, C.LastName, O.ID as OrderID
from Customers as C
inner join Orders as O
on C.ID = O.CustomerID
where C.FirstName = 'Tina' AND C.LastName = 'Smith';

-- all revenues from iPhones
select sum(P.Price)
from Products as P
inner join Orders as O
on P.ID = O.ProductID
where P.Name = 'iPhone';

-- increase the price of iPhone to $250
update Products
set Price = 250
where Name = 'iPhone';