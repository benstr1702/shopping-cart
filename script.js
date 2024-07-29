//products container
const productsContainer = document.getElementById("products-container");
const createCustomerBtn = document.getElementById("create-customer-btn");
const avatarStockElement = document.getElementById("icon-stock-section");
const avatarDisplayBox = document.querySelector(".user-icon");
const cartDisplayBox = document.querySelector(".user-cart");
const cartStockElement = document.getElementById("cart-stock-section");
const userNameInput = document.querySelector("#user-name");
const productCart = document.querySelector("#product-cart");
function chooseRandomColor() {
	let random = Math.floor(Math.random() * 256);
	return random;
}
//Avatar Class
class Avatar {
	constructor(htmlElement, iconClasses, stock) {
		this.htmlElement = htmlElement;
		this.stock = stock;
		this.htmlElement.className = iconClasses;
		this.htmlElement.addEventListener(
			"click",
			this.toggleActive.bind(this)
		);
	}
	toggleActive() {
		const isCartSection =
			this.stock.htmlElement.id === "cart-stock-section";
		const displayBox = isCartSection ? cartDisplayBox : avatarDisplayBox;

		if (!this.htmlElement.classList.contains("active")) {
			this.stock.deselectAll();
			this.htmlElement.classList.add("active");

			displayBox.innerHTML = "";

			const clonedIcon = this.htmlElement.cloneNode(true);
			displayBox.appendChild(clonedIcon);
		} else {
			this.htmlElement.classList.remove("active");

			displayBox.innerHTML = "";
		}
	}
}

//Stock Class
class Stock {
	constructor(htmlElement, iconClassList) {
		this.htmlElement = htmlElement;
		this.iconClassList = iconClassList;
		this.stock = [];
		this.createStock();
	}

	createStock() {
		const shuffledIconClassList = [...this.iconClassList];
		for (let i = shuffledIconClassList.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledIconClassList[i], shuffledIconClassList[j]] = [
				shuffledIconClassList[j],
				shuffledIconClassList[i],
			];
		}
		this.stock = shuffledIconClassList.map((iconClasses) => {
			const newIcon = document.createElement("i");
			newIcon.style.color = `rgb(${chooseRandomColor()} , ${chooseRandomColor()} , ${chooseRandomColor()})`;
			newIcon.style.padding = "5px";
			newIcon.style.textAlign = "center";
			this.htmlElement.appendChild(newIcon);
			return new Avatar(newIcon, iconClasses, this);
		});
	}

	deselectAll() {
		this.stock.forEach((avatar) => {
			avatar.htmlElement.classList.remove("active");
		});
	}
}

class Customer {
	constructor(username, avatar, cart) {
		this.username = username;
		this.avatar = avatar;
		this.cart = cart;
	}
}

function createCustomer() {
	if (
		cartDisplayBox.children.length > 0 &&
		avatarDisplayBox.children.length > 0 &&
		userNameInput.value
	) {
		const customer = new Customer(
			userNameInput.value,
			avatarDisplayBox.children[0].className,
			cartDisplayBox.children[0].className
		);

		console.log(customer);
	} else {
		console.error(
			"Please select a valid username, avatar and cart icons to create a new customer!"
		);
	}
}

createCustomerBtn.addEventListener("click", () => {
	createCustomer();
	userNameInput.value = "";
});

class Product {
	constructor(productData) {
		this.name = productData.name;
		this.color = productData.color;
		this.price = productData.price;
		this.icon = productData.icon;
		this.isSale = productData.isSale || false;
		this.stars = productData.stars || 0;
		this.contains = productData.contains || [];
	}
}

class ProductStock {
	constructor(htmlElement, productList) {
		this.htmlElement = htmlElement;
		this.productList = productList;
		this.createProductStock();
	}
	createProductStock() {
		if (Array.isArray(this.productList)) {
			this.productList.forEach((productData) => {
				const product = new Product(productData);
				const productElement = this.createProductElement(product);
				this.htmlElement.appendChild(productElement);
			});
		} else {
			console.error("Product list is not an array or is undefined");
		}
	}
	createProductElement(product) {
		const productElement = document.createElement("div");
		productElement.classList.add("product");

		const iconElement = document.createElement("i");
		iconElement.className = product.icon;
		iconElement.style.color = product.color;

		const nameElement = document.createElement("h3");
		nameElement.textContent = product.name;

		const priceElement = document.createElement("p");
		priceElement.textContent = product.price;

		const contentsElement = document.createElement("div");
		contentsElement.classList.add("product-contents");

		const addToCartBtn = document.createElement("button");

		addToCartBtn.classList.add("add-to-cart");
		addToCartBtn.textContent = "Add To Cart";

		addToCartBtn.addEventListener("click", () =>
			this.addToCart(productElement)
		);

		product.contains.forEach((contentGroup) => {
			const groupElement = document.createElement("div");
			groupElement.classList.add("content-group");

			if (Array.isArray(contentGroup)) {
				contentGroup.forEach((content) => {
					const itemElement = this.createContentItem(content);
					groupElement.appendChild(itemElement);
				});
			} else {
				const itemElement = this.createContentItem(contentGroup);
				groupElement.appendChild(itemElement);
			}

			contentsElement.appendChild(groupElement);
		});

		productElement.appendChild(contentsElement);

		productElement.appendChild(iconElement);
		productElement.appendChild(nameElement);
		productElement.appendChild(priceElement);
		productElement.appendChild(addToCartBtn);

		if (product.isSale) {
			const saleElement = document.createElement("span");
			saleElement.textContent = "Sale";
			saleElement.classList.add("sale-badge");
			productElement.appendChild(saleElement);
		}

		if (product.stars) {
			const starsElement = document.createElement("div");
			starsElement.classList.add("stars");
			for (let i = 0; i < product.stars; i++) {
				const starIcon = document.createElement("i");
				starIcon.className = "fas fa-star";
				starsElement.appendChild(starIcon);
			}
			productElement.appendChild(starsElement);
		}

		return productElement;
	}
	createContentItem(content) {
		const itemElement = document.createElement("div");
		itemElement.classList.add("content-item");

		const iconElement = document.createElement("i");
		iconElement.className = content.icon;
		iconElement.style.color = content.color;

		const textElement = document.createElement("span");
		textElement.textContent = content.what;

		itemElement.appendChild(iconElement);
		itemElement.appendChild(textElement);

		return itemElement;
	}

	addToCart(productElement) {
		const clonedProduct = productElement.cloneNode(true);

		const addToCartBtn = clonedProduct.querySelector(".add-to-cart");
		if (addToCartBtn) {
			addToCartBtn.remove();
		}

		const removeFromCartBtn = document.createElement("button");
		removeFromCartBtn.textContent = "Remove";
		removeFromCartBtn.classList.add("remove-button");
		removeFromCartBtn.addEventListener("click", () => {
			clonedProduct.remove();
		});
		clonedProduct.appendChild(removeFromCartBtn);

		productCart.appendChild(clonedProduct);
	}
}

const avatarStock = new Stock(avatarStockElement, avatarIconNames);
const cartStock = new Stock(cartStockElement, cartIconNames);
const productList = new ProductStock(productsContainer, productData);
