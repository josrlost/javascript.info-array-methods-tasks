let arr = [1, 2, 3];

function shuffle(arr) {
   arr.sort((a, b) => Math.floor(Math.random() * a - b))
}

shuffle(arr);
shuffle(arr);


console.log(arr);

//arr.sort((a, b) => Math.floor(Math.random() * a - b))