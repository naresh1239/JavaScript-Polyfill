let data = [12,44,43,45,88,46,22]

// find the second max number
function run(arr){
let maxNum = -Infinity;
let sMax = -Infinity;

for (const element of arr) {
    console.log(element)
    if(element > maxNum){
        sMax = maxNum;
        maxNum = element
    }else if(element > sMax){
        sMax = element
    }
}
return [maxNum,sMax]
}

console.log(run(data))