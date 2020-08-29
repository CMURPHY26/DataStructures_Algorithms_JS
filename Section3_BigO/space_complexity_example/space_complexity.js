//Things that can cause Space Complexity
//Variables
//Data Structures
//Function Call
//Allocations

function boooo(n) {
    for(let i = 0; i < n.length; i++) {
        console.log("booooooo!")
    }
}

boooo([1,2,3,4,5]);

//Time complexity O(n)
//Space complexity O(1)
//Space complexity the size of the input doesn't matter but the space that the function takes up. In this case we only set one variable, which is i so the space complexity is O(1)

function arrayOfHiNTimes(n) {
    let hiArray = []; //created data structure
    for(let i =0; i < n; i++) { //created variable
        hiArray[i] = "hi"; //added element to data structure n times
    }
    return hiArray;
}

arrayOfHiNTimes(6)
// BigO Space Complexity: O(1 + n) simplifies to O(n)