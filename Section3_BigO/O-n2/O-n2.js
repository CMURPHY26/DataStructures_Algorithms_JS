const boxes = ['a', 'b', 'c', 'd', 'e'];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

//When you see two nested for loops you use multiplication rather than addition for big O notation

//BigO: O(n * n) of O(n^2)

function logAllPairsOfBoxes(boxes) {
    boxes.forEach(function(firstBox) {
        boxes.forEach(function(secondBox) {
            console.log(firstBox,secondBox)
        })
    }) 
}

//O(n^2) - nested loop

