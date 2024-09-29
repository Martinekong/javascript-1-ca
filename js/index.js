// FILTER BUTTON
const filterSection = document.querySelector("#filter");
const filterBtn = document.createElement("button");

const filterIcon = document.createElement("i");
filterIcon.classList.add("fa-solid", "fa-filter")

filterBtn.textContent = "filter";
filterBtn.classList.add("secondary-btn", "filter-btn");

filterBtn.appendChild(filterIcon);
filterSection.appendChild(filterBtn);


// SHOP GRID
const shopGrid = document.querySelector("#shop-grid")

const shopBtns = [
  { href: "shop/shop-male.html", label: "male" },
  { href: "shop/shop-female.html", label: "female" }
];

shopBtns.forEach(button => {
  const link = document.createElement(`a`);
  link.href = button.href;
  link.classList.add("shop-btn");

  const shopBtn = document.createElement(`button`);
  shopBtn.classList.add("primary-btn")
  shopBtn.textContent = button.label;

  link.appendChild(shopBtn);
  shopGrid.appendChild(link);
});

const allProducts = [
  {
    href: "shop/jackets/summit.html",
    imgSrc: "images/male-4.jpg",
    alt: "male wearing a brown jacket on a sunny day",
    name: "Summit",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/venture.html",
    imgSrc: "images/female-1.jpg",
    alt: "female wearing a green jacket holding a camera",
    name: "Venture",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/blizzard.html",
    imgSrc: "images/female-4.jpg",
    alt: "woman wearing a light blue winter jacket",
    name: "Blizzard",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/nimbus.html",
    imgSrc: "images/male-3.jpg",
    alt: "man wearing a brown jacket on a mountain",
    name: "Nimbus",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/blaze.html",
    imgSrc: "images/male-1.jpg",
    alt: "male wearing an orange jacket on top of a mountain",
    name: "Blaze",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/explorer.html",
    imgSrc: "images/female-2.jpg",
    alt: "female wearing a yellow jacket on a snowy mountain",
    name: "Explorer",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/ridge.html",
    imgSrc: "images/female-3.jpg",
    alt: "female wearing an orange jacket and ski gear",
    name: "Ridge",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/trek.html",
    imgSrc: "images/male-2.jpg",
    alt: "male wearing a red jacket and a backpack",
    name: "Trek",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/horizon.html",
    imgSrc: "images/male-5.jpg",
    alt: "male wearing a light brown winter jacket",
    name: "Horizon",
    price: "$99",
    oldPrice: "$149"
  },
  {
    href: "shop/jackets/cyclone.html",
    imgSrc: "images/female-5.jpg",
    alt: "woman wearing an orange jacket on a hike",
    name: "Cyclone",
    price: "$99",
    oldPrice: "$149"
  }
];

//Use this for the grids on the other pages ?
// let currentPage = window.location.pathname;
// let productsToDisplay;

// if (currentPage.includes("index.html")) {
//   productsToDisplay = allProducts;
// } else {
//   productsToDisplay = allProducts.slice(0, 4);
// }

function createProductCard(product) {
  const link = document.createElement("a");
  link.href = product.href;

  const card = document.createElement("div");
  card.classList.add("card");

  const imageDiv = document.createElement("div");
  imageDiv.classList.add("image");

  const img = document.createElement("img");
  img.src = product.imgSrc;
  img.alt = product.alt;

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-bag-shopping", "fa-2x", "card-icon");

  imageDiv.appendChild(img);
  imageDiv.appendChild(icon);
  card.appendChild(imageDiv);

  const textDiv = document.createElement('div');
  textDiv.classList.add('text');

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = product.name;

  const priceDiv = document.createElement('div');

  const price = document.createElement('p');
  price.classList.add('price');
  price.textContent = product.price;

  const oldPrice = document.createElement('p');
  oldPrice.classList.add('old-price');
  oldPrice.textContent = product.oldPrice;

  priceDiv.appendChild(price);
  priceDiv.appendChild(oldPrice);
  textDiv.appendChild(name);
  textDiv.appendChild(priceDiv);
  card.appendChild(textDiv);
  link.appendChild(card);

  return link;
}

allProducts.forEach(product => {
  const productCard = createProductCard(product);
  shopGrid.appendChild(productCard);
});