

update Customers
set
ContactName=@ContactName,
ContactTitle=@ContactTitle,
Address=@Address,
Country=@Country,
Phone=@Phone,
Fax=@Fax
where CustomerID=@CustomerID
