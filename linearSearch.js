// linear search in recursion

function findInd(arr,tar,ind = 0) {
    if(arr[ind]===tar) return ind
    return findInd(arr,tar,ind+1)
}
let arr = [1,5,3,6,2,9]
console.log(findInd(arr,2))

//finding missing no

function miss(arr,n) {
    let sum = n * (n+1)/2
    let actual = 0
    for(let i=0;i<arr.length;i++) {
        actual+=arr[i]
    }
    return sum-actual
}
console.log(miss([1,3,4,5,6],6))