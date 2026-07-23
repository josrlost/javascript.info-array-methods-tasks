// Map to names

let john = { name: "John", age: 25, };
let pete = { name: "Pete", age: 30, };
let mary = { name: "Mary", age: 28, };

let users = [ john, pete, mary ];

let names = users.map((ele) => {let copyArr = ele.name; return copyArr;});

console.log(names);
console.log(john);


//Map to objects

let john2 = { name: "John", surname: "Smith", id: 1, };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3} ;

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map((ele) => {let copyObj = {fullName: `${ele.name} ${ele.surname}`, id: ele.id}; return copyObj;});

console.log(usersMapped);