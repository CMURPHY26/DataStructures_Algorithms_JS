/* 
Rule Book
Rule 1: Worst Case
const nemo = ['nemo'];

function findNemo1(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
}

findNemo1(nemo);

Best case - nemo could be the first item in the array - O(1)
Worst case - nemo could be the last item in the array - O(n)


Rule 2: Remove Constants
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2); 
    var index = 0;

    while (index < middleIndex) { //O(n/2)
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) { //O(100)
        console.log('hi');
    }
}

BigO: (1 + n/2 + 100)
Simplifies by dropping constants to O(n)


function compressBoxesTwice(boxes) {
    boxes.forEach(function(box) { // O(n)
        console.log(box)
    })

    boxes.forEach(function(box) { // O(n)
        console.log(box)
    })
} 

BigO: O(2n) simplifies by dropping constants to O(n)


Rule 3: Different terms for inputs
function compressBoxesTwice(boxes,boxes2) {
    boxes.forEach(function(box) { // O(n)
        console.log(box)
    })

    boxes2.forEach(function(box) { // O(m)
        console.log(box)
    })
} 

BigO: O(n + m)
//does not simplify to O(n) because the inputs are of separate terms. The first box array could only contain one element where the second array could contain 1000 elements.


Rule 4: Drop Non Dominants


*/