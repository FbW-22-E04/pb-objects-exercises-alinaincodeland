//1
const data = { a: 1 };
//write your code here 


function isPlainObject(val) {
    if (val.constructor === Array || val == null) {
        return false;
    } else {
        return true;
    }
}


console.log(isPlainObject(data)); // true
console.log(isPlainObject([1, 2, 3])); // false 
console.log(isPlainObject([])); // false


console.log("----------------------------------------------------");


//2
const data2 = { a: 1, b: 2 };
//write your code here 

function makePairs(obj) {
    let entries = Object.entries(obj);
    console.log(entries);
    return (entries);

}

console.log(makePairs(data2)); // [['a', 1], ['b', 2]] 

console.log("----------------------------------------------------");


/* Another solution for ex.

function makePairs(obj) {
    const arr = []
    
    for (const key in obj) {
        arr.push([key, obj[key]])
    }
    return arr;
}

*/


console.log("Ex 3");
const data3 = { a: 1, b: 2 };

//write your code here 


function without(obj, prop) {
    let newObj = { ...obj }

    for (let key in obj) {


        if (key == prop) {
            delete newObj[key];
            return newObj;
        }
    }
}

console.log(without(data3, 'b')); // { a: 1 }
console.log(without({ a: 1, b: 2, c: 7, n: 5 }, 'a'));


console.log("----------------------------------------------------");

//4 

console.log("Ex 4");

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
//write your code here 

function isEmpty(obj) {
    let objVal = Object.values(obj);
    // console.log(objVal);


    if (objVal.length > 0 && objVal.some((element) => element !== undefined)) {
        return false;
    }
    return true;

}

console.log(isEmpty(data4)); // false
console.log(isEmpty({})); // true 
console.log(isEmpty(data40)); // true 

console.log("-----------------------------------------");





//5  

console.log("Exercise 5");
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//write your code here 


function isEqual(a, b) {
    if (JSON.stringify(a) === JSON.stringify(b)) {
        return true;
    } else {
        return false;
    }
}


/*
const isEqual = (firstObj, secondObj) => {
    const firstObjKeys = Object.keys(firstObj);
    const secondObjKeys = Object.keys(secondObj);

    if(firstObjKeys.length !== secondObjKeys.length) {
    return false
    }

    for (const prop in firstObj) {
        if (firstObj.hasOwnProperty(prop) && firstObj[prop] !== secondObj[prop]) {
        return false
        }
    }
    return true 
}
 */


console.log(isEqual(data5, data51)); // true  
console.log(isEqual(data5, data52)); // false



console.log("-----------------------------------------");
