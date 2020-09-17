window.addEventListener('DOMContentLoaded', (event) => {
    const h1 = document.createElement('h1');
    h1.setAttribute('class','my-name');
    const nameH = document.createTextNode('Tim Smith');
    h1.appendChild(nameH);
    document.body.appendChild(h1);

    const arr = [
        "<li>Long walks on the beach.</li>",
        "<li>I have two dogs and eight dogs.</li>",
        "<li>My favorite place to get lunch is Chipotle.</li>",
        "<li>On the weekends, I play flag football.</li>"
      ];
      listItem(arr);
      clock();
      profilePic();
      const arr1 = [
        "<li>Likes beer</li>",
        "<li>Dislikes the sun.</li>",
        "<li>Likes hockey.</li>",
        "<li>Loves work.</li>"
      ];
      listItem(arr1);
      h1.outerHTML = 'Jimmy John';

      const button = document.createElement('button');
      document.body.appendChild(button);

      button.addEventListener('click', (event) => {
        console.log('It WORKED!');
      });

});


const listItem = function(arr){
    const listElement = document.createElement('ul');
    listElement.setAttribute('id', 'details');
    listElement.setAttribute('class', 'my-details');
    const liString = arr.join(' ');
    listElement.innerHTML = liString;
    listElement.classList.add('class-2');
    document.body.appendChild(listElement);
    addClass();
};


const addClass = function(){
    let arr = document.querySelectorAll('li');
    arr.forEach(function(el){
        el.className = 'detail';
    });
};


const clock = function(){

    const title = document.querySelector('title');

    const setClock = () =>{
    let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime()
    const currentTime = new Date().getTime();
    let distance = countDownDate - currentTime;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    title.innerHTML = `${days} ${hours}:${minutes}:${seconds}`;
    }
    setInterval(setClock,1000);

}


const profilePic = function(){
    let element = document.createElement('img');
    element.setAttribute('src','Tim_Smith_Use.jpg');
    document.body.appendChild(element);

}
