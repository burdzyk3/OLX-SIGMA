const seenIds = new Set();

let i = 0;

function olxReapetedCarts() {
	const carts = document.querySelectorAll('[data-cy="l-card"]');
	carts.forEach((cart) => {
		const id = cart.id;
		i += 1;
		// console.log("ogloszenie nr:", i, "ID =", id);

		if (seenIds.has(id)) {
			console.log("Ukryto powtarzajace sie ogloszenie z ID: ", id);
		} else {
			seenIds.add(id);
			console.log("Dodano nowe ID: ", id);
		}
	});
}

const observer = new MutationObserver((mutationsList, observer) => {
	for (const mutation of mutationsList) {
		if (mutation.addedNodes.length > 0) {
			olxReapetedCarts();
		}
	}
});

observer.observe(document.body, {
	childList: true,
	subtree: true,
});

olxReapetedCarts();
