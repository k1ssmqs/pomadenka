const products = [
  { id: 1, name: "Блиск №1", price: 199, popular: true, img: "img1.png" },
  { id: 2, name: "Блиск №2", price: 149, popular: false, img: "img2.png" },
  { id: 3, name: "Блиск №3", price: 249, popular: true, img: "img3.png" }
];

const productContainer = document.getElementById("products");
const cartWindow = document.getElementById("cart-window");
const cartIcon = document.getElementById("cart-icon");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const modal = document.getElementById("modal");
const loginForm = document.getElementById("login-form");
const userIcon = document.getElementById("user-icon");

let cart = [];

function renderProducts(arr) {
  productContainer.innerHTML = "";
  arr.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} грн</p>
      <button onclick="addToCart(${product.id})">кошик</button>
    `;
    div.addEventListener("click", e => {
      if (!e.target.matches("button")) openProductModal(product);
    });
    productContainer.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.name;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
}

function openProductModal(product) {
  modal.classList.remove("hidden");
  modal.innerHTML = `
    <div class="product-detail">
      <h2>${product.name}</h2>
      <img src="${product.img}" alt="${product.name}" style="width: 150px">
      <p>Ціна: ${product.price} грн</p>
      <button onclick="modal.classList.add('hidden')">Закрити</button>
    </div>
  `;
}

function applyFilters() {
  const search = document.getElementById("search").value.toLowerCase();
  const sort = document.getElementById("sort").value;
  const min = parseFloat(document.getElementById("min-price").value);
  const max = parseFloat(document.getElementById("max-price").value);

  let filtered = products.filter(p => 
    p.name.toLowerCase().includes(search) &&
    p.price >= min &&
    p.price <= max
  );

  if (sort === "cheap") filtered.sort((a,b) => a.price - b.price);
  if (sort === "expensive") filtered.sort((a,b) => b.price - a.price);
  if (sort === "popular") filtered = filtered.filter(p => p.popular);

  renderProducts(filtered);
}

cartIcon.addEventListener("click", () => {
  cartWindow.classList.toggle("hidden");
});

document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("sort").addEventListener("change", applyFilters);
document.getElementById("min-price").addEventListener("input", applyFilters);
document.getElementById("max-price").addEventListener("input", applyFilters);

userIcon.addEventListener("click", () => {
  loginForm.classList.toggle("hidden");
});

document.getElementById("checkout").addEventListener("click", () => {
  alert("Дякуємо за покупку!");
  cart = [];
  updateCart();
  cartWindow.classList.add("hidden");
});

renderProducts(products);
applyFilters();
