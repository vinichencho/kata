const printNumber = (number) => {
    console.log(+number);
}

const multipleOfThree = (number) => {
    if (number % 3 === 0) return "fizz";
    else return "";
}

const multipleOfFive = (number) => {
    if (number % 5 === 0) return "buzz";
    else return "";
}

const multipleOfThreeAndFive = (number) => {
    return "" + multipleOfThree(number) + " " + multipleOfFive(number);
}

const fizzBuzz = (number) => {
    return multipleOfThreeAndFive(number);
}

console.log(fizzBuzz(15));