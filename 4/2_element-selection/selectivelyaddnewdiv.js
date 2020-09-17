// get div of interest
const div = document.getElementById('catch-me-if-you-can');

// get elements of interest
const cloudySpans = document.querySelectorAll('.cloudy');

// create ids for each
// prepend each to target div

cloudySpans.forEach((ele, i) => {
  ele.setAttribute('id', `cloudy-${i + 1}`);
  div.prepend(ele);
});

// could also add each as last child
// div.append(ele)

// create new div
// give it content

const newDiv = document.createElement('div');
newDiv.innerHTML = "i'm a new div";

// add before a specified element
// for example before #cloudy-4

document.getElementById('cloudy-4').parentNode.insertBefore(newDiv, document.getElementById('cloudy-4'));

/*
prints:
765
i'm a new div
4321
*/
