function promo(pax: number, comeX: number, payY: number, perHead: number): number {
    // ex. pax = 5, come 4, pay 3, per head = 100
    // use Math.floor for integer division
    return Math.floor(pax / comeX) * (payY * perHead) + (pax % comeX) * perHead;
}
// console.log(Math.floor(4 / 4));

console.log(promo(4, 4, 3, 100));
console.log(promo(5, 4, 3, 100));
console.log(promo(6, 4, 3, 100));
console.log(promo(8, 4, 3, 100));
console.log(promo(9, 4, 3, 100));
