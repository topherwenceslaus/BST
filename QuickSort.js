const quickSort=(arr, start, end)=>{
    if(start< end) {
          let partitionIndex = partition(arr, start, end)
          console.log(partitionIndex)
          quickSort(arr, start, partitionIndex-1)
          quickSort(arr, partitionIndex+1, end)
        }
    return arr
}

const partition = (arr, start, end)=>{
    let pivot = arr[end]
    let pivotIndex = start
    
    for(let i= start;i < end;i++){
            if(arr[i] <= pivot){
                let temp = arr[pivotIndex]
                arr[pivotIndex] =  arr[i] 
                arr[i] = temp
                pivotIndex++
            }
        }

    let temp =  arr[end]
    arr[end] = arr[pivotIndex]
    arr[pivotIndex] = temp
    return pivotIndex
}
