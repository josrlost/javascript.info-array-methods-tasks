
/*
FIRST ODIN JS Problem for Arrays
*/

let text = prompt('Write a word to camelize', 'foo-foo-bar');


function camelize(word) {
    return word.split('-').map(modifyArray).join('');
}

function modifyArray(arrElement, indxArr) {
        if(indxArr === 0) {
        return arrElement;
    }   else if (indxArr !== 0) {
        let arrParts = arrElement.split('');
        arrParts[0] = arrParts[0].toUpperCase();
        return arrParts.join('');
    }
}


const modifiedText = camelize(text);

console.log(modifiedText);

