const avatarStockElement = document.getElementById("icon-stock-section");

const cartStockElement = document.getElementById("cart-stock-section");
//Choose random color function
function chooseRandomColor() {
  let random = Math.floor(Math.random() * 256);
  return random;
}
//Avatar Class
class Avatar {
  constructor(htmlElement, iconClasses) {
    this.htmlElement = htmlElement;
    this.htmlElement.className = iconClasses;
    console.log(this.htmlElement, " htmlElement");
    this.htmlElement.addEventListener("click", this.toggleActive.bind(this));
  }
  toggleActive() {
    console.log("toggled");
    this.htmlElement.classList.toggle("active");
  }
}
//Stock Class
class Stock {
  constructor(htmlElement, iconClassList) {
    // this.items = [];
    this.htmlElement = htmlElement;
    this.iconClassList = iconClassList;
    this.createStock();
  }

  createStock() {
    const shuffledIconClassList = [...this.iconClassList];
    for (let i = shuffledIconClassList.length - 1; i > 0; i--) {
      // Fixed: shuffledIconClassList - 1 -> shuffledIconClassList.length - 1
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledIconClassList[i], shuffledIconClassList[j]] = [
        shuffledIconClassList[j],
        shuffledIconClassList[i],
      ];
    }
    console.log("Shuffled icon classes:", shuffledIconClassList);

    this.stock = shuffledIconClassList.map((iconClasses) => {
      const newIcon = document.createElement("i");
      newIcon.style.color = `rgb(${chooseRandomColor()} , ${chooseRandomColor()} , ${chooseRandomColor()})`;
      this.htmlElement.appendChild(newIcon);
      // console.log(new Avatar(newIcon, iconClasses));
      return new Avatar(newIcon, iconClasses);
    });
  }
}

//Avatar object from Stock
const avatarStock = new Stock(avatarStockElement, avatarIconNames);
// cart stock from Stock
const cartStock = new Stock(cartStockElement, cartIconNames);
