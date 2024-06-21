function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++){
    let swapped = false
    if(arr[i]<arr[i-1]){
      let temp = arr[i]
      arr[i] = arr[i-1]
      arr[i-1] = temp
      swapped = true
    }
    if(swapped){
      let j = i-1
      while(j > 0){
        if(arr[j] >= arr[j-1]) break
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        j--
      }
    }
  }
  return arr
}

module.exports = insertionSort;