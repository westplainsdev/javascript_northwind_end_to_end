
SELECT c.companyName, orders.*
FROM orders INNER JOIN customers c ON orders.customerid = c.customerid
WHERE orderid = @orderId