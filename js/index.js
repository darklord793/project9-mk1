// const - constant
// let - variable
// var - old variable

const a = parseFloat(prompt('Enter A'));

const b = parseFloat(prompt('Enter B'));

const c = parseFloat(prompt('Enter C'));

function solveQuadrEq(a, b, c) {
    
    const d = calcDiscr(a,b,c);
    
    function calcDiscr(a, b, c, d) {
    return calcDiscr = b * b - 4 * a * c;
    }
    if (d < 0) {
    alert('Equation has no real roots');
    } else if (d = 0) {
    alert('Equation has 1 root');
    } else {
    alert('Equation has 2 roots');
    const x1  = calcX1(a, b, c, d);
    function calcX1 (a, b, c, d){
    return x1 = (-b - Math.sqrt(d))/(2*a);
    }
    const x2  = calcX2(a, b, c, d);
    function calcX2 (a, b, c, d){
    return x2 = (-b - Math.sqrt(d))/(2*a);
    }
    }