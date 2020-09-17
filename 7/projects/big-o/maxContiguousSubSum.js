// THIS PROJECT SECOND



//     Largest Contiguous Sub - sum
// You have an array of integers and you want to find the largest contiguous(together in sequence) sub - sum.Find the sums of all contiguous sub - arrays and return the max.

//     Example:

// list = [5, 3, -7]
// largest_contiguous_subsum(list) # => 8

//     # possible sub - sums
// [5]           # => 5
// [5, 3]        # => 8 -- > we want this one
// [5, 3, -7]    # => 1
// [3]           # => 3
// [3, -7]       # => -4
// [-7]          # => -7
// Example 2:

// list = [2, 3, -6, 7, -6, 7]
// [2]
// [2,3]
// [2,3,-6]
// [2,3,-6,7]
// []
// largest_contiguous_subsum(list) # => 8(from[7, -6, 7])
// Example 3:

// list = [-5, -1, -3]
// largest_contiguous_subsum(list) # => -1(from[-1])
// Phase I
// Write a function that iterates through the array and finds all sub - arrays using nested loops.First make an array to hold all sub - arrays.Then find the sums of each sub - array and return the max.

function subArr(arr){  //<----- O(n^2)
  const subSum = [];
  for(let i = 0; i < arr.length; i++){
    // subSum.push([arr[i]])
    for(let j = i + 1; j <= arr.length; j++){
      subSum.push(arr.slice(i, j));
    }
  }

  let maxSum = subSum[0];
  for(let i = 1; i < subSum.length; i++){
    const currArr = subSum[i];
    let currSum = 0;
    for(let j = 0; j < currArr.length; j++){
      currSum += currArr[j];
    }
    if(currSum > maxSum) maxSum = currSum;
  }

  return maxSum;
}


// Discuss the time complexity of this solution.

// console.log(subArr([2, 3, -6, 7, -6, 7]))
// console.log(subArr([-5, -1, -3]))
// Phase II
// Let's make a better version. Write a new function using O(n) time with O(1) memory. Keep a running tally of the largest sum. To accomplish this efficient space complexity, consider using two variables. One variable should track the largest sum so far and another to track the current sum. We'll leave the rest to you.
function moreSubSum(arr){
  let max = arr[0];
  let currSum = 0;
  for(let i = 0; i < arr.length; i++){
    currSum += arr[i];
    if(currSum > max) max = currSum;
    if(currSum < 1) currSum = 0;
  }
  return max;
}
// console.log(moreSubSum([-2, -5, 6, -2, -3, 1, 5, -6]))
// console.log(moreSubSum([-3, 1, -8, 4, -1, 2, 1, -5, 5]))
console.log(moreSubSum([1,4,7,-3,4,12]))
console.log(moreSubSum([-3,-4, 5,7,-10,9]))
console.log(moreSubSum([5,4,-1, 10, -3, 7]))
console.log(moreSubSum([1,5,3,7,2]))
// [1,4,7,-3,4,12] // 16
// [-3,-4, 5,7,-10,9] // 12
// [5,4,-1, 10, -3, 7] // 10
// [1,5,3,7,2] // 18
// Get your story straight, and then explain your solution's time complexity to your TA.
