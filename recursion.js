//paliandrome using recursion

function pali(str) {
    function helper(str,s=0,e=str.length-1) {
        if(s>e) return true
        if(str[s] !== str[e]) return false
        return helper(str,s+1,e-1)
    }
    return helper(str)
}
console.log(pali('maqdam'))

//factorial

function factorial(n) {
    if(n<2) return 1
    return n * factorial(n-1)
}
console.log(factorial(4))

//sum of digits of no
let a = '1234'
function sum(str,s,e) {
    if(s === e) return Number(str[s])
    return Number(str[s]) + sum(str,s+1,e)
}
console.log(sum(a,0,a.length-1))

//fibonachi

function fibo(n) {
    if(n<2) return n
    return fibo(n-1) + fibo(n-2)
}
function print(n) {
    for(let i=0;i<n;i++) {
        console.log(fibo(i))
    }
}
print(7)

//array.flat using recursion

function flat(arr) {
    let result = []
    for(let val of arr) {
        if(Array.isArray(val)) {
            result.push(...flat(val))
        }else{
            result.push(val)
        }
    }
    return result
}
let a = [[1,2,],3,[4,5]]
console.log(flat(a))

