window.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('.form');
  const item = document.getElementById('items');
  const quantity = document.getElementById('quantity');
  const cart = document.getElementById('shopping-cart');

  form.addEventListener('submit', e => {
    if (localStorage.getItem(item.value) === null) {
      storeItem();
    } else {
      updateStorage();
    }
    // check storage
    // add item
    // update item
  });

  cart.addEventListener('click', e => {
    if (e.target.classList.contains('remove-button')) {
      removeItem(e.target);
    }
  });

  cart.addEventListener('input', e => {
    updateStorage(e.target);
  });

  const storeItem = () => {
    localStorage.setItem(`${item.value}`, `${quantity.value}`);
  };

  const loadCart = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let cur = document.createElement('div');
      let button = document.createElement('button');
      let spinner = document.createElement('input');

      spinner.setAttribute('id', 'spinner');
      spinner.setAttribute('type', 'number');
      spinner.value = Number(`${localStorage.getItem(localStorage.key(i))}`);

      button.innerHTML = 'remove';
      button.setAttribute('id', `${localStorage.key(i)}`);
      button.classList.add('remove-button');

      cur.setAttribute('id', `${localStorage.key(i)}`);
      cur.innerHTML = `${localStorage.key(i)}`;

      cart.append(cur);
      cur.append(button);
      cur.append(spinner);
    }
  };

  const removeItem = target => {
    localStorage.removeItem(target.id);
    location.reload();
  };

  loadCart();
});

const updateStorage = spinner => {
  let key = spinner.parentNode.id;
  let count = spinner.value;
  localStorage.setItem(`${key}`, `${count}`);
  console.log(key);
  console.log(count);
};
