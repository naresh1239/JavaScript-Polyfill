let data = [1,2,3,4,5,6]



function run(arr){
 
    let copy = arr[0]
    for (let i = 0; i < arr.length - 1; i++){
         arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = copy
    return arr
}
console.log(run(data))
