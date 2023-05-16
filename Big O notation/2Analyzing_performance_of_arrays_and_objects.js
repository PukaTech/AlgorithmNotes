/*
Objects are collections of unordered key-value pairs. They are useful when you don't need a specific order for your data and require fast access, insertion, and removal operations.

In terms of performance, objects have the following characteristics:

- Insertion and removal operations have a constant time complexity, denoted as O(1).
- Searching for a value in an object has a linear time complexity, denoted as O(N), where N is the number of elements in the object.
- Accessing a value by its key has a constant time complexity, denoted as O(1).

Object methods also have their own time complexities:

- Object.keys, Object.values, and Object.entries methods have a linear time complexity, O(N), as they iterate over all the keys, values, or key-value pairs in the object.
- The hasOwnProperty method has a constant time complexity, O(1), as it checks if the object has a specific property.

Arrays, on the other hand, are ordered lists of elements. They are useful when you need to maintain a specific order for your data and still require fast access, insertion, and removal operations.

In terms of performance, arrays have the following characteristics:

- Insertion and removal operations' time complexity depends on where the operation occurs. If you insert or remove elements at the beginning of the array, it has a linear time complexity, O(N), as it requires reindexing all subsequent elements. If you insert or remove elements at the end of the array, it has a constant time complexity, O(1).
- Searching for a value in an array has a linear time complexity, O(N), as the fastest possible search requires checking each element in the array.
- Accessing an element by its index has a constant time complexity, O(1), regardless of where the element is located in the array.

Some common built-in array operations and their time complexities are:

- push and pop operations have a constant time complexity, O(1), as they simply add or remove elements at the end of the array.
- shift and unshift operations have a linear time complexity, O(N), as they require reindexing when elements are added or removed from the beginning of the array.
- concat, slice, and splice operations have a time complexity that depends on the number of elements involved, O(N), as they create new arrays or modify existing ones.
- The sort operation has a time complexity of O(N*log(N)), as it requires making comparisons and moving elements around to arrange them in order.
- forEach, map, filter, reduce, and similar operations have a linear time complexity, O(N), as they iterate over each element in the array.

In summary, objects are faster than arrays for most operations, except when a specific order is required. Arrays are efficient when adding or removing elements at the end, and their performance can vary depending on the operation and its position in the array.
*/





//Examples of Objects:

let  instructor = {
    name:'Puka',
    hasYoutubeChannel:true,
    favoriteNUmbers: [1,2,3] 
}

 console.log(Object.keys(instructor));
 console.log('-----------------------')
 console.log('-----------------------')
 console.log(Object.values(instructor));
 console.log('-----------------------')
 console.log('-----------------------')
 console.log(Object.entries(instructor));
 console.log('-----------------------')
 console.log('-----------------------')
 console.log(instructor.hasOwnProperty('name'));
 console.log('-----------------------')
 console.log('-----------------------')






//example for arrays:

let students = ['John', 'Paul', 'George'];
let values = [true,{}, [], 2, 'awesome'];

console.log(students);
console.log(values);