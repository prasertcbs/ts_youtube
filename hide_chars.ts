function hideChars(s: string, start: number, stop: number, ch: string = 'X'): string {
    let s2: string = "";
    // console.log(s.length);
    if (stop < s.length) {
        for (let i = 0; i < s.length; i++) {
            if (i >=start && i <= stop) {
                s2 += ch;
            } else {
                s2 += s[i];
            }
        }
    }
    return s2;
}

let a = hideChars('understand', 3, 6, '_');
console.log(a);
