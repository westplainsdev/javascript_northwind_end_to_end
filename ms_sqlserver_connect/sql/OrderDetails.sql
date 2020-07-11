select

od.OrderID,
p.ProductName,
od.UnitPrice,
od.Quantity,
(od.UnitPrice * od.Quantity) as ExtendedPrice,
p.QuantityPerUnit


from [Order Details] as od
inner join Products as p on p.ProductID = od.ProductID
where od.OrderID = @OrderID