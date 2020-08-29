//Given an array of integers and a sum determine if there is a pair of numbers in the array that add to the sum

//O(n^2)
const hasPairWithSum = (arr, sum) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum) {
                return true
            }
        }
    }
    return false
}

console.log(hasPairWithSum([6,4,3,2,1,7], 9))


//Better solution
//O(n)
const hasPairWithSum2 = (arr, sum) => {
    const mySet = new Set();
    for(let i = 0; i < arr.length; i++) {
        if(mySet.has(arr[i])) {
            return true
        }
        mySet.add(sum - arr[i]);
    }

    return false
}

console.log(hasPairWithSum2([6,4,3,2,1,7], 9))