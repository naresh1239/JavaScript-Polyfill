let data = [1,2,3,1,2,1,1,3,5,6,7]

// find the second max number
function run(arr){
    let temp = {}
    for (const element of arr) {
        temp[element] = element
    }

    return Object.values(temp)
}

console.log(run(data))