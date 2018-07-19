function checkdigit(thai_id: string): number {
    let sum = 0;
    for (let i = 0; i < thai_id.length - 1; i++) {
        // sum += (13 - i) * parseInt(thai_id[i]);
        sum += (13 - i) * +thai_id[i]; // +"16" = 16
    }
    // console.log(sum);
    let x = sum % 11;
    return x <= 1 ? 1 - x : 11 - x;
}

console.log(checkdigit('1234567890123'));
