// Sort in decreasing order:

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr);



// Copy and sort array:

let arr1 = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr1);

function copySorted(arr) {
    copyArr = arr.slice();
    return copyArr.sort();
}

console.log(arr1);
console.log(sorted);