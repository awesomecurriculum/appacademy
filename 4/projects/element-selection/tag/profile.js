window.addEventListener('DOMContentLoaded', e => {
  const tags = {
    name: 'h1',
    pic: 'img',
    bio: 'h2',
    details: 'ul',
    like: 'button',
    counter: 'div',
  };

  const tag = {
    name: 'tag',
    pathToPic: 'tag.jpg',
    details: {
      breed: 'golden retriever',
      age: '1',
      birthday: 'july 3',
      birthplace: 'wiscasset, maine',
      toys: ['bone', 'kong toy', 'blue squishy ball'],
      friends: ['trot', 'sky'],
      likes: ['wrestling with trot', 'playing with sky', 'eating peanut butter'],
    },
  };

  const keys = Object.keys(tags);
  const tagNames = Object.values(tags);
  const refs = addElements(keys, tagNames);
  const listItems = makeList(tag.details);

  refs.details.innerHTML = listItems.join('\n');
  refs.name.innerHTML = tag.name;
  refs.pic.setAttribute('src', tag.pathToPic);
  refs.pic.style.height = '400px';
  refs.pic.style.width = '600px';

  refs.like.innerHTML = 'wish tag a happy bday';

  document.querySelectorAll('span').forEach(span => (span.style.fontWeight = 'bold'));

  let count = 0;
  refs.like.addEventListener('click', e => {
    count++;
    counter.innerHTML = `bday wishes: ${count}`;
  });

  const container = document.createElement('div');
  const countdown = document.createElement('div');
  const counter = document.createElement('div');
  counter.innerHTML = `bday wishes: ${count}`;
  counter.setAttribute('id', 'counter');

  container.classList.add('container');
  container.appendChild(refs.like);
  container.appendChild(counter);
  container.appendChild(countdown);

  document.body.appendChild(container);
  setInterval(birthdayCountdown, 1000, countdown);
});

const addElements = (keys, tags) => {
  return keys.reduce((acc, ele, i) => {
    acc[ele] = document.createElement(tags[i]);
    if (tags[i].startsWith('h')) {
      let inner = acc[ele].appendChild(document.createTextNode(ele));
    }
    document.body.appendChild(acc[ele]);
    return acc;
  }, {});
};

const makeList = obj => {
  const details = Object.keys(obj);
  return details.reduce((items, item) => {
    items.push(`<li><span>${item}</span>: ${Array.isArray(obj[item]) ? obj[item].join(', ') : obj[item]}</li>`);
    return items;
  }, []);
};

const birthdayCountdown = countdown => {
  let countDownDate = new Date('July 3, 2020 00:00:00').getTime();
  const currentTime = new Date().getTime();
  let remaining = countDownDate - currentTime;
  let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
  countdown.innerHTML = `time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
};
