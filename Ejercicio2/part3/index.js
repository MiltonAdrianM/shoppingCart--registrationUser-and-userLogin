
var numAparicionesSum = [];
var dado1, dado2;
    
for (var i = 0; i < 36000; i++) {
   dado1 = Math.floor(Math.random()*(5+1)+1);
   dado2 = Math.floor(Math.random()*(5+1)+1);
    
    suma = dado1 + dado2;
    numAparicionesSum.push(suma);
}
console.log(numAparicionesSum)