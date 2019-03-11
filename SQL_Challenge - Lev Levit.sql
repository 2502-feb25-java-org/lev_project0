create table Products (
ID int identity(1,1) primary key,
Name varchar(50),
Price decimal(6,2)
);

create table Customers (
ID int identity(1,1) primary key,
FirstName varchar(50),
LastName varchar(50),
CardNumber bigint
);


create table Orders (
ID int identity(1,1) primary key,
ProductID int,
CustomerID int,
);

insert into Products (Name, Price)
values
('Widget', 5),
('Thingy', 2),
('Stick', 1);

insert into Customers (FirstName, LastName, CardNumber)
values
('Lev', 'Levit', 34325221453),
('Bob', 'Bobit', 24743423532),
('Egan', 'Rights', 7095335321);

insert into Orders (ProductID, CustomerID)
values
(1, 1),
(1, 3),
(2, 2),
(3, 1),
(3, 2);

insert into Products (Name, Price)
values
('iPhone', 200);

insert into Customers (FirstName, LastName, CardNumber)
values
('Tina', 'Smith', 5342423643);

insert into Orders (ProductID, CustomerID)
values
(4, 4);

select * from Products
select * from Customers
select * from Orders

select sum(P.Price)
from Products as P
inner join Orders as O
on P.ID = O.ProductID
where P.Name = 'iPhone';

update Products
set Price = 250
where Name = 'iPhone';