
/*
FIRST ODIN JS Problem for Arrays
*/

let text = prompt('Write a word to camelize', 'background-word');


function camelize(word) {
    return word.split('-').map(modifyArray).join('');
}

function modifyArray(arrElement) {
        let textToModify = text;
        if(textToModify.indexOf(arrElement) > 0) {
        let arrParts = arrElement.split('');
        arrParts[0] = arrParts[0].toUpperCase();
        return arrParts.join('');
    }   else {
        return arrElement;
    }
}


const modifiedText = camelize(text);

console.log(modifiedText);

