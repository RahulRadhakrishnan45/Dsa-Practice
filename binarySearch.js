// search and replace valule

function searchReplace(arr,target) {
    let left = 0
    let right = arr.length-1
    while(left<=right) {
        let mid = Math.floor((left+right)/2)
        if(arr[mid] == target) {
            arr[mid] = 0
        }else if(arr[mid]<target) {
            left = mid+1
        }else {
            right = mid -1
        }
    }
    return arr
}
let arr = [1, 3, 5, 7, 9, 11]
let target = 7
console.log(searchReplace(arr,target))

//find target binary

function findElem(arr,tar,start = 0,end = arr.length-1) {
    if(start>end) return -1
    let mid = Math.floor((start+end)/2)
    if(arr[mid] === tar) return mid
    if(tar < arr[mid]) return findElem(arr,tar,start,mid -1)
    return findElem(arr,tar,mid+1,end)
}
let arr = [1,2,3,4,5,6,7,8]
console.log(findElem(arr,6))

