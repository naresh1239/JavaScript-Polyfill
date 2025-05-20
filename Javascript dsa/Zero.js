let data = [1,0,1,0,0,0,1,0,1,1]

//reverse array
function run(arr){
    let j = 0;
    let i = 0;

    while (i < arr.length) {
        if(arr[i] == 1){
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++
        }
        i++
        console.log([i,j])
    }
   

 return arr
}

console.log(run(data))