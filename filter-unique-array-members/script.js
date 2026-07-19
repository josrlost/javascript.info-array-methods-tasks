

function unique(arr) {
    arrCopy = arr;
    return arr.filter((ele, indx) => {for(str of arrCopy) {if(ele === str && indx === arrCopy.indexOf(str)) {return ele;}}});
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(strings);

console.log(unique(strings))