var alertCity = " Loading Weather report...";

var mycityBurbank = document.querySelector("#cityBurbank");
var mycityBurbank = document.querySelector("#cityChicago");
var mycityBurbank = document.querySelector("#cityChicago");



// console.log(accepCookies);

function burbankCity(){
    alert(alertCity);
    
}

function chicagoCity(){
    alert(alertCity);  
}

function dallasCity(){
    alert(alertCity);  
}
//......... cookies policy.......
function accepCookies(){
    var accepCookies =document.querySelector("#footer5");
    console.log(accepCookies)
    accepCookies.remove();

}

//.......... change temperature.......
// var maxTemperature = 24;
// var fahrenheit = (maxTemperature * 9/5) + 32;
// console.log(fahrenheit)

// var temperature = document.querySelector("#temperature")

// function changeTemperature(){
//     temperature.innerHTML = fahrenheit 

// };

// function temperature(element){

//     console.log(element.value);


// }
// function ActualizarTemperature(){
// var selector = document.getElementById ("selectorTemperatura");
// // console.log(selectorTemperatura)
// var temperaturaMaxima = document.getElementById("temperaturaMaxima");
// // console.log(temperaturaMaxima)
// var temperaturaMinima = document.getElementById("temperaturaMinima");
// // console.log(temperaturaMinima);
// var valorSeleccionado = selector.value;  
// console.log(valorSeleccionado);

//     if (valorSeleccionado === "celcius") {
//         var temperaturaMaximaCelsius = parseInt (temperaturaMaxima.textContent);
//         var temperaturaMinimaCelsius = parseInt (temperaturaMinima.textContent);
//         var temperaturaMaximaFahrenheit= celciusToFahrenheit(temperaturaMaximaCelsius);
//         var temperaturaMinimaFahrenheit = celciusToFahrenheit(temperaturaMinimaCelsius);
//         temperaturaMaxima.textContent = temperaturaMaximaFahrenheit;
//         temperaturaMinima.textContent = temperaturaMinimaFahrenheit;
//     }else if (valorSeleccionado ==="fahrenheit"){
//         var temperaturaMaximaFahrenheit = parseInt (temperaturaMaxima.textContent);
//         var temperaturaMinimaFahrenheit = parseInt (temperaturaMinima.textContent);
//         var temperaturaMaximaCelsius = fahrenheitTocelcius (temperaturaMaximaFahrenheit);
//         var temperaturaMinimaCelsius = fahrenheitTocelcius (temperaturaMinimaFahrenheit);
//         temperaturaMaxima.textContent = temperaturaMaximaCelsius;
//         temperaturaMaxima.textContent = temperaturaMinimaCelsius;
    
//     }

// }

// function celciusToFahrenheit(celcius) {
// var fahrenheit = (celcius * 9/5) + 32;
// return fahrenheit

// }

// function fahrenheitTocelcius(fahrenheit){
// var celcius = (fahrenheit - 32 ) * 5/9;

// }


function c2f(temp) {
    return Math.round( 9 / 5 * temp + 32);

}

function f2c(temp) {
    return Math.round( 5 / 9 * (temp - 32));

}



function convert(element){
    for(var i=1; i<9;i++){
        var tempSpan = document.querySelector ("#temp" + i);
        var tempVal = parseInt(tempSpan.innerHTML);
        if(element.value == "C"){
            tempSpan.innerHTML = f2c(tempVal)+"";
        }else{
            tempSpan.innerHTML = c2f(tempVal);
        }
          

        console.log(c2f(tempVal));
        

    }

}

