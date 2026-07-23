let users = [
    {id: 'john', name: 'John Smith', age: 20},
    {id: 'ann', name: 'Ann Smith', age: 24},
    {id: 'pete', name: 'Pete Peterson', age: 31},
];

console.log(users);

function groupById(arr) {
const copiedArray = arr.reduce((groupedPeopleById, currentEle) => {
    let id = currentEle.id;
    if(groupedPeopleById[id] == null) {groupedPeopleById[id] = []};
    groupedPeopleById[id].push(currentEle);
    return groupedPeopleById;
}, {}); return copiedArray;
}
    
let userById = groupById(users);

console.log(userById);
