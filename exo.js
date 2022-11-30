let value = document.getElementById('is-integer').innerHTML;

if  (Number.isInteger(value)) {
    value = value + " est un nombre entier";
}
else {
    value = value + " n'est pas un nombre entier";
}
console.log(value);

let value2 = document.getElementById('is-nan').innerHTML;

if (isNaN(value2)) {
    value2 = value2 + " ==> est NaN"
}
else {
    value2 = value2 + " ==> est un nombre"
}
console.log(value2);

let value3 = document.getElementById('parse-float').innerHTML;

document.getElementById('parse-float').innerHTML = Number.parseFloat(value3);

console.log(Number.parseFloat(value3));

