const mergeSort= (arr)=>{
    let arrayLength = arr.length
    if(arrayLength === 1) return arr
    
    let mid = Math.floor(arrayLength/ 2)
    let left =  arr.slice(0,mid)
    let right = arr.slice(mid, arrayLength)

    return merge(mergeSort(left),mergeSort(right))
}

const merge= (left, right)=>{
        let leftLength = 0
        let rightLength = 0
        let results = []

        while(leftLength < left.length && rightLength < right.length){
            if(left[leftLength] < right[rightLength]){
                results.push(left[leftLength++])
            }
            else{
                results.push(right[rightLength++])
            }
        }

        while(leftLength < left.length){
            results.push(left[leftLength++])
        }

        while(rightLength < right.length){
            results.push(right[rightLength++])
        }

        return results
}
