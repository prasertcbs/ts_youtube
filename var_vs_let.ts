function demo(): void {
    // var: function scope
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log(`i = ${i}`);
    console.log('------------------');

    // let: block scope
    for (let j = 1; j <= 5; j++) {
        console.log(j);
    }
    // j is out of scope
    // console.log(`j =  ${j}`);
    console.log('------------------');

}

// tsc -t es6 
// Set object
function ex_from_typescript(): void {
    let pets = new Set(["Fish", "Cat", "Dog", "Hamster"]);
    pets["species"] = "mammals";

    for (let pet in pets) {
        console.log(pet); // "species"
    }

    for (let pet of pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
}

demo();
ex_from_typescript();