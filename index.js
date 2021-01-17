// Your code here
function mapToNegativize(array){
    const newArr = array.map(num => num * -1)
    return newArr
}

function mapToNoChange(array){
    return array
}

function mapToDouble(array){
    const dubArr = array.map(num => num * 2)
    return dubArr
}

function mapToSquare(array){
    const squaredArr = array.map(num => num ** 2)
    return squaredArr
}

function reduceToTotal(array, sum=0){
   for (const i in array){
       sum += array[i]
   }
   return sum 
}

function reduceToAllTrue(array){
    for (const i in array){
        if (array[i] === false){
            return false
        }
    }
    return true
}

function reduceToAnyTrue(array){
    for (const i in array){
        if (array[i] === true){
            return true
        }
    }
    return false
}