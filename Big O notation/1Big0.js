// Big O notation is a way to measure and analyze the efficiency of algorithms in terms of their time and space complexity. 
//Time complexity refers to how fast an algorithm runs as the size of the input increases, while space complexity refers to 
//how much additional memory is required to run the algorithm.

// In Big O notation, we use the notation O(f(n)) to represent the upper bound of the number of simple operations a computer has to do, 
//as n (the size of the input) increases. This means that the algorithm's running time is eventually less than a constant times f(n), as n gets larger. 
//The function f(n) could be linear (f(n) = n), quadratic (f(n) = n^2), constant (f(n) = 1), or something entirely different.

// To make this easier to understand, we can consider a few examples of common Big O complexities:

// O(n): As n grows, the runtime of the algorithm grows proportionally with it. This is sometimes called "third faster."
// O(1): The runtime of the algorithm stays the same, regardless of the size of the input. This is sometimes called "faster."
// O(n^2): As n grows, the runtime of the algorithm grows quadratically, or twice as much as n. This is sometimes called "fourth faster."
// O(log n): As n grows, the runtime of the algorithm grows slower than n. This is sometimes called "second faster."
// When it comes to space complexity, we look at the additional memory that an algorithm needs to allocate to run, 
//not including the space taken by the inputs. For example, the auxiliary space complexity refers to the space required by the algorithm itself.

// In JavaScript, we can apply similar complexity analysis to the amount of memory required by the code. Here are a few examples of space complexities in JS:

// O(n): As n grows, the amount of memory used grows proportionally with it.
// O(1): The amount of memory used stays the same, regardless of the size of the input.
// O(n^2): As n grows, the amount of memory used grows quadratically, or twice as much as n.
// O(log n): As n grows, the amount of memory used grows slower than n.
// It's also important to remember that logarithms are commonly used in searching and sorting algorithms, as well as recursion algorithms, 
//but typically for space complexity rather than time complexity.

// To see these concepts in action, we can consider a few examples of functions with different time and space complexities:

// Example 1: addUpTo(n)
// This function takes in a number n and returns the sum of all numbers from 1 up to and including n. 
//The time complexity of this function is O(n), as the loop runs n times. The space complexity is O(1), as the function only uses a single variable to store the total sum.

// Example 2: double(arr)
// This function takes in an array arr and returns a new array where each element is double the corresponding element in the input array. 
//The time complexity of this function is O(n), as the loop runs n times (where n is the length of the input array). 
//The space complexity is also O(n), as the function creates a new array with n elements to store the doubled values.

// By understanding and analyzing the time and space complexity of our code, we can write more efficient and optimized algorithms that can handle larger inputs and perform better overall.




//time complexty examples:
//example 1:
function addUpTo(n){
    let total = 0;
    for(let i=1; i <=n; i++){
        total +=i;
    }
    return total;
}

console.log(addUpTo(2))

//example 2:
function addUpTwo(num){
    return num * (num+1) /2;
}

console.log(addUpTwo(4))

let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2-t1) / 1000} seconds`)


/*
addUpTo(n): This function adds up all the numbers from 1 to n. It has a time complexity of O(n) because the number of operations performed by the computer grows linearly as n increases.

addUpTwo(num): This function uses a mathematical formula to calculate the sum of numbers from 1 to num. It has a time complexity of O(1) because the number of operations performed by the computer remains constant as num increases.

*/


//space complexty examples:
//example 1:
function sum(arr){
    let total = 0;
    for (let i =0; i< arr.length; i++){
        total += arr[i];

    }
    return total;
}

//example 2
function double(arr){
    let newArr = [];
    for (let i =0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}




//space complexty examples:
//example 1:
function sum(arr){
    let total = 0;
    for (let i =0; i< arr.length; i++){
        total += arr[i];

    }
    return total;
}

//example 2
function double(arr){
    let newArr = [];
    for (let i =0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
