let data = [12,44,43,45,88,46,22,[1,2,34,5,[3,4,5,67]]]

// find the second max number
let temp = []
function run(arr){

    for (const element of arr) {
        if(Array.isArray(element)){
          run(element)
        }else{
            temp.push(element)
        }
    }
    return temp
}

console.log(run(data))