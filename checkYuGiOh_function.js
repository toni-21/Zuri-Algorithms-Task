function checkYuGiOh(n) {
    let array = [];

    if (isNaN(n)) {
        return `invalid paramter: "${n}"`; //checking if a valid number was given
    }

    for (let i = 1; i <= n; i++) {        //this loops through each number of the given range, checks if they satisfy the                                       
        var character = [];               //multiples' conditions and assigns a character accordingly
        if (i % 2 == 0) {
            character.push("Yu");
        }
        if (i % 3 == 0) {
            character.push("Gi")
        }
        if (i % 5 == 0) {
            character.push("Oh")
        }
        if (character.length > 0) {                    //the character's list is greater than 1, therefore it satisfies the multiples's conditions                                    
            var joinedCharacter = character.join("-"); //and can be moved to the main array with a '-' demarcation when necessary
            array.push(joinedCharacter);
        } else {
            array.push(i);
        }
    }
    return array;
}

let case1 = checkYuGiOh(7);
let case2 = checkYuGiOh("5");
let case3 = checkYuGiOh("fizzbuzz");

console.log(case1);
console.log(case2);
console.log(case3);
