function demo1() {
    let point: [number, number] = [3, 10];
    console.log(point);
    console.log(`point[0]=${point[0]}`);
    console.log(`point[1]=${point[1]}`);
}

function demo3() {
    let person: [string, string, number, boolean]; // fname, lname, age, isSuperhero
    person = ['Peter', 'Parker', 25, true];
    console.log(person);
    console.log(person[1]);
    for (const v of person) {
        console.log(v);
    }
}

// demo1();
demo3();
