SELECT first_name, last_name, rental_date FROM customer
INNER JOIN rental ON rental.customer_id = customer.customer_id
WHERE return_date IS NULL
ORDER BY rental_date ASC
LIMIT 1;