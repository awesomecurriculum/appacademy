// THIS PROJECT FIRSWT


// my_min
// Given a list of integers find the smallest number in the list.

// Phase I
// First, write a function that compares each element to every other element of the list.Return the element if all other elements in the array are larger.
// What is the time complexity for this function?
function badMin(arr){   //<---- O(n^2)
  let isMin = true;
  for(let i = 0; i < arr.length; i++){
    const firstTerm = arr[i];
    for(let j = i + 1; j < arr.length; j++){
      const secondTerm = arr[j];
      if (secondTerm < firstTerm) {
        isMin = false;
        break
      }
    }
    if(isMin) return firstTerm;
  }
}

// Phase II
// Now rewrite the function to iterate through the list just once while keeping track of the minimum.What is the time complexity ? <---- O(n)
function goodMid(arr) {
  let min = arr[0];
  for (let ele of arr){
    if (ele <= min) min = ele;
  }
  return min;
}
