      const products = [
          { name: 'Блиск для губ', price: 330 },
          { name: 'База під макіяж', price: 185 },
          { name: 'Тональна основа Dior', price: 1900 },
          { name: 'Пудра компактна', price: 400 },
          { name: 'Туш для вій', price: 210 },
          { name: 'Олівець для брів', price: 130 },
          { name: 'Хайлайтер', price: 275 },
          { name: 'Бальзам для губ', price: 150 },
          { name: 'Рум’яна', price: 295 },
          { name: 'Коректор', price: 225 },
          { name: 'Праймер для повік', price: 165 },
          { name: 'Пензлик для пудри', price: 199 }
        ];

        const productsContainer = document.querySelector('.products');
        products.forEach((product, index) => {
          const div = document.createElement('div');
          div.className = 'product';
          div.innerHTML = `
            <img src="https://via.placeholder.com/150?text=Продукт+${index + 1}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.price} грн</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Кошик</button>
          `;
          productsContainer.appendChild(div);
        });
    let cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartWindow = document.getElementById('cart-window');

    function addToCart(name, price) {
      cart.push({ name, price });
      updateCartUI();
    }

    function updateCartUI() {
      cartItems.innerHTML = '';
      let total = 0;
      cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} – ${item.price} грн`;
        cartItems.appendChild(li);
        total += item.price;
      });
      cartCount.textContent = cart.length;
      cartTotal.textContent = total;
    }

    function toggleCart() {
      cartWindow.classList.toggle('hidden');
    }

    function checkout() {
      if (cart.length === 0) {
        alert('Кошик порожній!');
        return;
      }
      alert('Дякуємо за покупку!');
      cart = [];
      updateCartUI();
      toggleCart();
    }