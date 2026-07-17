
/*
FIRST ODIN JS Problem for Arrays
let arr = [1, 2, 3, 4, 5];

function sumOfTrtipledEvens(arr) {
return arr
	.filter((num) => num % 2 === 0)
	.map((num) => num * 2).
	.reduce((acc, cur) => acc + curr);
}

*/

let text = ['hola', 'mierda'];


//.map(modifyArray) 

function camelize(word) {
    console.log(word.split('-').map(modifyArray).join(''));
}

function modifyArray(arrElement) {
        if(text.indexOf(arrElement) > 0) {
        let arrParts = arrElement.split('');
        arrParts[0] = arrParts[0].toUpperCase();
        return arrParts.join('');
    }   else {
        return arrElement;
    }
}

/*
function modifyArray1(arrElement) {
    let arrParts = arrElement.split('');
    arrParts[0] = arrParts[0].toUpperCase();
    return arrParts.join('');
}
*/

//console.log(text);

const modifiedText = text.map(modifyArray);

console.log(modifiedText);

