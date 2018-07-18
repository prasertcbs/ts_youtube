function googol(): string {
    let s: string = "";
    for(let i=0;i<100;i++) {
        s = s + "0";
    }
    return "1" + s;
}

console.log(googol());