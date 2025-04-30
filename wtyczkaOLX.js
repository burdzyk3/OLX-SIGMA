const carts = document.querySelectorAll('[data-cy="l-card"]');

let i = 0;

carts.forEach((cart) => {
	const id = cart.id;
	i += 1;
	console.log("ogloszenie nr:", i, "ID =", id);

    
});