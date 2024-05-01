
// multi-dimensional array
let array = [
    ['angelsEnvy', 'newRiff', 'michters', 'basilHayden', true],
    ['illegal', 1800, 'tresGeneraciones', 'donJulio', false],
    ['wellers', 'glenMorangie', 'elijahCraig', 'lagavulin', false]
]

// nested for loop

for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
        console.log(array[i][j]);
    }
}

// finds + returns largest argument

function findBiggest(num1, num2){
    if (num1 > num2) {
        return num1;
    } else if (num1 === num2){
        return "Trick question, the numbers are the same."
    } else {
        return num2;
    }
}

console.log(findBiggest(5, 6));


// determines if same value

function sameValue(varOne, varTwo){
    if (varOne === varTwo){
        return 'These values are strictly equal.'
    } else {
        return 'These values are not strictly equal.'
    }
}

console.log(sameValue(true, true));
console.log(sameValue(7, '7'));