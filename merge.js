function merge(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0
  while(arr1.length>i && arr2.length>j){
    if(arr1[i]>arr2[j]){
      result.push(arr2[j])
      j++
    } else{
      result.push(arr1[i])
      i++
    }
  }
  while(i<arr1.length){
    result.push(arr1[i])
    i++
  }
  while(j<arr2.length){
    result.push(arr2[j])
    j++
  }
  return result
}

function mergeSort(array) {
  if(array.length>1){
    let mid = Math.floor(array.length/2)
    return merge(mergeSort(array.slice(0,mid)), mergeSort(array.slice(mid)))
  }else {
    return array
  }
}

module.exports = { merge, mergeSort};