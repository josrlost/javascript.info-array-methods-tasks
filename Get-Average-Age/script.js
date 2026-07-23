let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

// formula for the average is (age1 + age2 + ... + ageN) / N

function getAverageAge(arr) {
    let num = 0;
    let arrCopy = arr.map((ele) => {let eleCopy = ele.age; return eleCopy;});
    arrCopy.sort((a, b) => a - b);
    console.log(arrCopy);
    for(const elem of arrCopy) {
        num = num + elem;
        console.log(num);
    }; return Math.round(num / (arrCopy.length));
}

console.log(getAverageAge(arr));