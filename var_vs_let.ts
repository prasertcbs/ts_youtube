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

demo()