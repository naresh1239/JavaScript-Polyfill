let data = [12,44,43,45,88,46,22,99]

//reverse array
function run(arr){
  let start = 0;
  let end = arr.length - 1
 while (start < end) {
    // [arr[start],arr[end]] = [arr[end], arr[start]]
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    start++
    end--
 }
 return arr
}

console.log(run(data))