let vals = [1,2,3,4,5]
console.log('inital vals', vals)


const doubleVals = (x) => {return x * 2}

// doubleVals function taken as a callback in .map() which is a higher order function
doubles = vals.map(doubleVals)

console.log('doubles function',doubles)


const addOne = x => {return x + 1}

add = vals.map(addOne)

console.log('addOne function', add)