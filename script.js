
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

let text = 'background-color';
let text1 = 'list-style-image';


//.map(modifyArray) 

function camelize(word) {
    return word.split('-').map(modifyArray).join('');
}

function modifyArray(arrElement) {
        if(text1.indexOf(arrElement) > 0) {
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

const modifiedText = camelize(text1);

console.log(modifiedText);

