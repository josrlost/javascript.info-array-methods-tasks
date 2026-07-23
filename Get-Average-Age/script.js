let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

// formula for the average is (age1 + age2 + ... + ageN) / N

function getAverageAge(arr) {
    let arrCopy = arr.map((ele) => {let eleCopy = ele.age; return eleCopy;});
    arrCopy.sort((a, b) => a - b);
    console.log(arrCopy);
    for(const elem of arrCopy) {
        let num = 0;
        num = num + elem;
        console.log(num);
    }; return num / (arrCopy.length - 1);
}

console.log(getAverageAge(arr));