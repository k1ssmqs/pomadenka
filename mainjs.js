      const products = [
          { name: 'Блиск для губ', price: 330, img: 'blisk.png' },
          { name: 'База під макіяж', price: 185, img: 'base.png' },
          { name: 'Тональна основа Dior', price: 1900, img: 'tonalka.png' },
          { name: 'Пудра компактна', price: 400, img: 'pudra.png' },
          { name: 'Туш для вій', price: 210, img: 'tush.png' },
          { name: 'Олівець для брів', price: 130, img: 'pensil.png' },
          { name: 'Хайлайтер', price: 275, img: 'hailaiter.png' },
          { name: 'Бальзам для губ', price: 150, img: 'balsam.png' },
          { name: 'Рум’яна', price: 295, img: 'rumyana.png' },
          { name: 'Коректор', price: 225, img: 'corector.png' },
          { name: 'Праймер для повік', price: 165, img: 'praimer.png' },
          { name: 'Пензлик для пудри', price: 199, img: 'penslik.png' }
        ];

        const productsContainer = document.querySelector('.products');
        products.forEach((product, index) => {
          const div = document.createElement('div');
          div.className = 'product';
          div.innerHTML = `
            <img src="${product.img}" alt="${product.name}" />
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
