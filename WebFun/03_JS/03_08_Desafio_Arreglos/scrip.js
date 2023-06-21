//  TAREA 1 - SIEMPRTE HAMBRIENTO
// 
function siempreHambriento(arr) {
    var encontrada = false;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "comidas") {
        console.log("delicioso");
        encontrada = true;
      }
    }
  
    if (!encontrada) {
      console.log("Tengo hambre");
    }
  }
  
  siempreHambriento([3.14, "comida", "pastel", true, "comida"]);


//   TAREA 2 - PASO ALTO


function obtenerValoresMayores(arr, cutoff) {
    let nuevosValores = [];
  
    for (let i = 0; i < arr.length; i++) {
        // console.log(i)    
        if (arr[i] > cutoff) {
        nuevosValores.push(arr[i]);
      }
    }
  
    return nuevosValores;
  }
  const arreglo = [6, 8, 3, 10, -2, 5, 9, 5];
const valorCorte = 5;

const resultado = obtenerValoresMayores(arreglo, valorCorte);
console.log(resultado); // Esoeramos de vuelta [6,8,10,9]


// TAREA 3 - MEJOR QUE EL PROMEDIO
function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for (var i =0; i<arr.length; i++){
        // console.log(i)
        sum = sum + arr[i]; 
        // console.log(sum)
        var avr = sum / arr.length
        // console.log(avr)
    }
    var count = 0

    for (var i=0; i<arr.length; i++){
        if (arr[i]>avr){
            count ++;
        }
    }
    // cuenta cuántas variables son mayores que el promedio

    return count; 
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta



// TAREA 4 - ARREGLO INVERTIDO
function reverse(arr) {
    // tu código aquí
    var reversedArr = [];
    for (var i= arr.length-1; i>0 ;i--){
        reversedArr.push(arr[i])
        // console.log(i)
        
    }
    return reversedArr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]


// TAREA 5 ARREGLO DE FIBONACCI

function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    // tu código aquí
    for ( var i=2; i<n ; i++){
        var nextNumber = fibArr[i-1] + fibArr [i - 2];
        fibArr.push(nextNumber);

    }
    return fibArr;  
}
 var n=10  
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
