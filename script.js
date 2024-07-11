const iconSection = document.querySelector("#icon-stock-section");
const cartSection = document.querySelector("#cart-stock-section");
const userIconDiv = document.querySelector(".user-icon");
const userCartDiv = document.querySelector(".user-cart");
function chooseRandomColor() {
  let random = Math.floor(Math.random() * 256);
  return random;
}

avatarIconNames.forEach((icon) => {
  let iconElement = document.createElement("i");
  iconElement.className = icon;
  iconElement.style.color = `rgb(${chooseRandomColor()} , ${chooseRandomColor()} , ${chooseRandomColor()})`;
  iconElement.style.fontSize = "40px";
  iconSection.appendChild(iconElement);

  iconElement.addEventListener("click", () => {
    // Remove active class from all icons in the original section
    document.querySelectorAll("#icon-stock-section i").forEach((icon) => {
      icon.classList.remove("active");
    });

    // Add active class to the clicked icon in the original section
    iconElement.classList.add("active");

    // Clear previous content of userIconDiv
    userIconDiv.innerHTML = "";

    // Create a deep clone of the clicked icon
    let clonedIcon = iconElement.cloneNode(true);
    console.log(clonedIcon);

    userIconDiv.appendChild(clonedIcon);

    // Log to console for debugging
    console.log("Icon cloned and appended to user icon div");
  });
});

//cart
cartIconNames.forEach((iconClass) => {
  let element = document.createElement("i");
  element.className = iconClass;
  element.style.color = `rgb(${chooseRandomColor()} , ${chooseRandomColor()} , ${chooseRandomColor()})`;
  element.style.fontSize = "40px";
  cartSection.appendChild(element);

  element.addEventListener("click", () => {
    // Remove active class from all icons in the cart section
    document.querySelectorAll("#cart-stock-section i").forEach((icon) => {
      icon.classList.remove("active");
    });

    // Add active class to the clicked icon
    element.classList.add("active");
    userCartDiv.innerHTML = "";

    // Create a deep clone of the clicked icon
    let clonedCart = element.cloneNode(true);
    console.log(clonedCart);

    userCartDiv.appendChild(clonedCart);
  });
});

class Stock {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  shuffle() {
    for (let i = this.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
  }

  display() {
    return this.items;
  }
}

class Avatar {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

class Product extends Avatar {
  constructor(name, image, price, onSale, stars) {
    super(name, image);
    this.price = price;
    this.onSale = onSale;
    this.stars = stars;
  }
}

class Client {
  constructor(avatar) {
    this.avatar = avatar;
    this.cart = new ShoppingCart();
    this.cart.display();
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  display() {
    return this.items;
  }
}

class StockOfProducts extends Stock {
  display() {
    return this.items.map((product) => {
      let display = `${product.name} - $${product.price}`;
      if (product.onSale) display += " (SALE)";
      if (product.stars >= 4) display += " ⭐".repeat(product.stars);
      return display;
    });
  }
}
