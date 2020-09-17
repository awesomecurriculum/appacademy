const printDiv = _ => {
  const divOfInterest = document.getElementById('catch-me-if-you-can');
  console.log(divOfInterest);
};

window.onload = printDiv;

const printSpans = _ => {
  const spansOfInterest = document.querySelectorAll('span.cloudy');
  console.log(spansOfInterest);
};

window.onload = printSpans;
