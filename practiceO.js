//sum of 2 val in array using set

function result(arr,t) {
    let seen = new Set()
    let res = []
    for(let val of arr) {
        let need = t-val
        if(seen.has(need)) {
            res.push(need,val)
        }
        seen.add(val)
    }
    return res
}

console.log(result([1,2,3,6,4],10))

time = O(n)
space = O(n)

// moving selected values to last

let a = [6,2,3,6,4,6,7,3,2,6]

function result(arr,val) {
    let start = 0
    let end = arr.length-1
    while(start<end) {
        if(arr[end]==val) {
            end --
        }
        if(arr[start]==val) {
            [arr[start],arr[end]]=[arr[end],arr[start]]
            start++
            end--
        }
        else {
            start++
        }
    }
    return arr
}

console.log(result(a,6))

time = O(n)
space = O(1)

