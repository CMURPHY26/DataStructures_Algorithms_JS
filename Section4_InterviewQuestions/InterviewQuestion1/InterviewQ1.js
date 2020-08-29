//Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
// const array1 = ['a','b','c', 'x']
// const array2 = ['z','y','i']
//should return false
//----------------
// const array1 = ['a','b','c', 'x']
// const array2 = ['z','y','x']
//should return true


// 2 parameters (arrays) - no size limit
// return true or false

//Brute force nested loop
//But the arrays could be of different lengths so it's not O(n^2)
//The proper BigO notation is O(n * m)
// const array1 = ['a','b','c', 'x']
// const array2 = ['z','y','x']
// const commonItem = (arr1,arr2)=> {
//     for(let i = 0; i < arr1.length; i++) {
//         for(let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(commonItem(array1,array2)); 
// Time Complexity O(n * m)
//Space Complexity O(1) // not creating any new variables


////////////////////////////////////////////////////////
/////More Efficient than nested loops, using an object
///////////////////////////////////////////////////////
// const array1 = ['a','b','c', 'x'];
// const array2 = ['z','y','b'];

// //array 1 ==> obj {
// //  a: true,
// //  b: true,
// //  c: true
// //}

// //array2[index] === obj.properties

// function containsCommonItem2(arr1,arr2) {
//     //loop through first array and create object where properties === items in the array
//     let map = {}
//     for (item of arr1) {
//         if(!map[item]) {
//             map[item] = true
//         }
//     }
//     //loop through the second array and check if item in second array exists on created object
//     for(element of arr2) {
//         if(map[element]) {
//             return true
//         }
//     }

//     return false

// }
// console.log(containsCommonItem2(array1,array2));

//BigO Time Complexity: O(n + m) 
//more efficient time complexity than brute force O(n * m)

//BigO Space Complexity: O(n)
//less efficient space complexity than brute force


//////////////////////////////////////////////////////////////////////
///Think about error checks and how you can break this code
//////////////////////////////////////////////////////////////////////

// function containsCommonItem2(arr1,arr2) {
//     //Can we assume there are always 2 params?
//     //put some conditional tests to confirm the inputs you are getting
//     //is what you are expecting
//     //what if arr2 === null or empty?

//     let map = {}
//     for (item of arr1) {
//         if(!map[item]) {
//             map[item] = true
//         }
//     }
//     for(element of arr2) {
//         if(map[element]) {
//             return true
//         }
//     }

//     return false

// }
// console.log(containsCommonItem2(array1,array2));


////////////////////////////
////Make Code More Readable
///////////////////////////
const array1 = ['a','b','c', 'x'];
const array2 = ['z','y','i'];
function containsCommonItem3(arr1,arr2) {
   return arr1.some(item => arr2.includes(item))
}

console.log(containsCommonItem3(array1,array2))

