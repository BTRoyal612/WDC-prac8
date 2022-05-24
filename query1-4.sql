SELECT DISTINCT address from address
INNER JOIN store on store.address_id = address.address_id
INNER JOIN inventory on inventory.store_id = store.store_id
INNER JOIN film on film.film_id = inventory.film_id
where title = "TWISTED PIRATES";