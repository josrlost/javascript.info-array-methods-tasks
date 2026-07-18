
let arr = [5, 3, 8, 1];


function filterRangeInPlace(arr, a, b) {
    arr.forEach((ele, indx, arr) => {ele > b && ele < a; arr.splice(indx, 1)});
}   



//(ele >= a && ele <= b) arr.splice(indx)}

filterRangeInPlace(arr, 1, 4);


console.log(arr);