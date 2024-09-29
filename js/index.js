// HERO
const heroSection = document.querySelector("#hero");

// HERO FEMALE
const shopFemaleLink = document.createElement("a");
shopFemaleLink.href = "shop/shop-female.html";
shopFemaleLink.classList.add("shop-female");

const femaleImg = document.createElement("img");
femaleImg.src = "images/female-2.jpg";
femaleImg.alt = "female wearing a yellow jacket on a snowy mountain";
shopFemaleLink.appendChild(femaleImg);

// text
const seasonTextFemale = document.createElement("p");
seasonTextFemale.classList.add("hero-text", "season");
seasonTextFemale.textContent = "season 2024";
shopFemaleLink.appendChild(seasonTextFemale);

const browseTextFemale = document.createElement("p");
browseTextFemale.classList.add("hero-text", "browse");
browseTextFemale.textContent = "browse";
shopFemaleLink.appendChild(browseTextFemale);

const headingTextFemale = document.createElement("p");
headingTextFemale.classList.add("hero-text", "heading");
headingTextFemale.textContent = "female jackets";
shopFemaleLink.appendChild(headingTextFemale);

// Circles
const femaleCirclesDiv = document.createElement("div");
femaleCirclesDiv.classList.add("hero-circles");

const femaleSolidCircle = document.createElement("i");
femaleSolidCircle.classList.add("fa-solid", "fa-circle");
femaleCirclesDiv.appendChild(femaleSolidCircle);

const femaleRegularCircle = document.createElement("i");
femaleRegularCircle.classList.add("fa-regular", "fa-circle");
femaleCirclesDiv.appendChild(femaleRegularCircle);

shopFemaleLink.appendChild(femaleCirclesDiv);

// Add female to hero
heroSection.appendChild(shopFemaleLink);


// HERO MALE
const shopMaleLink = document.createElement("a");
shopMaleLink.href = "shop/shop-male.html";
shopMaleLink.classList.add("shop-male");

const maleImg = document.createElement("img");
maleImg.src = "images/male-1.jpg";
maleImg.alt = "male wearing a red jacket and a backpack";
shopMaleLink.appendChild(maleImg);

// text
const seasonTextMale = document.createElement("p");
seasonTextMale.classList.add("hero-text", "season");
seasonTextMale.textContent = "season 2024";
shopMaleLink.appendChild(seasonTextMale);

const browseTextMale = document.createElement("p");
browseTextMale.classList.add("hero-text", "browse");
browseTextMale.textContent = "browse";
shopMaleLink.appendChild(browseTextMale);

const headingTextMale = document.createElement("p");
headingTextMale.classList.add("hero-text", "heading");
headingTextMale.textContent = "male jackets";
shopMaleLink.appendChild(headingTextMale);

// Circles
const maleCirclesDiv = document.createElement("div");
maleCirclesDiv.classList.add("hero-circles");

const maleRegularCircle = document.createElement("i");
maleRegularCircle.classList.add("fa-regular", "fa-circle");
maleCirclesDiv.appendChild(maleRegularCircle);

const maleSolidCircle = document.createElement("i");
maleSolidCircle.classList.add("fa-solid", "fa-circle");
maleCirclesDiv.appendChild(maleSolidCircle);

shopMaleLink.appendChild(maleCirclesDiv);

// Add male to hero
heroSection.appendChild(shopMaleLink);


// SHOP HEADER
const shop = document.querySelector("#shop");
const h1Heading = document.createElement("h1");

h1Heading.textContent = "shop our collection";

shop.appendChild(h1Heading);


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

allProducts.forEach(product => {
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
  shopGrid.appendChild(link);
});
