function convertFahrToCelcius(f) {
    let parameterType = Object.prototype.toString.call(f); //using this because its more descriptive than typeof method

    var splitType = parameterType.split(" "); //spliting the result to omit the first character 

    var adjustedType = splitType[1].slice(0, -1); //deleting the annoying right square bracket

    if (isNaN(f)) {
        return `${f} is not a valid number but a/an ${adjustedType}`;
    } else {
        let c = (f - 32) * (5 / 9);
        let roundedNumber = c.toFixed(4);
        return `${roundedNumber}°C`;
    }
}

let case1 = convertFahrToCelcius("0");
let case2 = convertFahrToCelcius(0);
let case3 = convertFahrToCelcius([1, 2, 3]);
let case4 = convertFahrToCelcius({ "temp": 0 });

console.log(case1);
console.log(case2);
console.log(case3);
console.log(case4);