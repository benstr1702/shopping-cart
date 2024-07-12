// const iconSection = document.querySelector("#icon-stock-section");
// const cartSection = document.querySelector("#cart-stock-section");
// const userIconDiv = document.querySelector(".user-icon");
// const userCartDiv = document.querySelector(".user-cart");

// avatarIconNames.forEach((icon) => {
//   let iconElement = document.createElement("i");
//   iconElement.className = icon;
//   iconElement.style.color = `rgb(${chooseRandomColor()} , ${chooseRandomColor()} , ${chooseRandomColor()})`;
//   iconElement.style.fontSize = "40px";
//   iconSection.appendChild(iconElement);

//   iconElement.addEventListener("click", () => {
//     // Remove active class from all icons in the original section
//     document.querySelectorAll("#icon-stock-section i").forEach((icon) => {
//       icon.classList.remove("active");
//     });

//     // Add active class to the clicked icon in the original section
//     iconElement.classList.add("active");

//     // Clear previous content of userIconDiv
//     userIconDiv.innerHTML = "";

//     // Create a deep clone of the clicked icon
//     let clonedIcon = iconElement.cloneNode(true);
//     console.log(clonedIcon);

//     userIconDiv.appendChild(clonedIcon);

//     // Log to console for debugging
//     console.log("Icon cloned and appended to user icon div");
//   });
// });

// //cart
// cartIconNames.forEach((iconClass) => {
//   let element = document.createElement("i");
//   element.className = iconClass;
//   element.style.color = `rgb(${chooseRandomColor()} , ${chooseRandomColor()} , ${chooseRandomColor()})`;
//   element.style.fontSize = "40px";
//   cartSection.appendChild(element);

//   element.addEventListener("click", () => {
//     // Remove active class from all icons in the cart section
//     document.querySelectorAll("#cart-stock-section i").forEach((icon) => {
//       icon.classList.remove("active");
//     });

//     // Add active class to the clicked icon
//     element.classList.add("active");
//     userCartDiv.innerHTML = "";

//     // Create a deep clone of the clicked icon
//     let clonedCart = element.cloneNode(true);
//     console.log(clonedCart);

//     userCartDiv.appendChild(clonedCart);
//   });
// });

//Choose random color function
function chooseRandomColor() {
  let random = Math.floor(Math.random() * 256);
  return random;
}
//Stock Class
class Stock {
  constructor(htmlElement, iconClassList) {
    this.items = [];
    this.htmlElement = htmlElement;
    this.iconClassList = iconClassList;
  }

  createStock() {
    this.stock = this.iconClassList.map((iconClasses) => {
      const newIcon = document.createElement("i");
      this.htmlElement.appendChild(newIcon);
      return new Avatar(newIcon, iconClasses);
    });
  }
}

//Avatar object from Stock
const avatarStock = new Stock(avatarStockElement, avatarIconNames);

//Avatar Class
class Avatar {
  constructor(htmlElement, iconClasses) {
    this.htmlElement = htmlElement;
    this.htmlElement.className = iconClasses;
  }
}
