
 select
 o.OrderID,
 o.CustomerID,
 e.FirstName + ' ' + e.LastName as SalesRep,
 o.OrderDate,
 o.RequiredDate,
 o.ShippedDate,
 o.Freight,
 s.CompanyName as ShippersName,
 o.ShipAddress,
 o.ShipCity,
 o.ShipRegion,
 o.ShipPostalCode,
 o.ShipCountry

  from orders as o

  inner join Shippers as s on s.ShipperID = o.ShipVia
  inner join Employees as e on e.EmployeeID = o.EmployeeID
   where o.CustomerID = @CustomerID