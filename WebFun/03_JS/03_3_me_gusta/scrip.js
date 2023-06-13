// // .......Neil Score......

// var score = 9;
// var countElement = document.querySelector("#countScore");
// console.log(countElement);


// function changeScore() { 
//     score ++;
//     countElement.innerHTML = score ;
// console.log(score);

// }

// // ...........Nicole.............................

// var Score1 = score + 3;
// var countElement1 =document.querySelector("#countScore1");
// console.log(countElement1);

// function cambiar_marcador() {
//     Score1 ++;
//     countElement1.innerHTML = Score1;

// }

// // .........Jim....................

// var Score2 = score + 0;
// var countElement2 =document.querySelector("#countScore2");
// console.log(countElement);

// function marcador_cambiado() {
//     Score2 ++;
//     countElement2.innerHTML = Score2;

// }
var likes =[9,12,9];
var spans = [
    document.querySelector("#countScore"),
    document.querySelector("#countScore1"),
    document.querySelector("#countScore2")
    // console.log(spans);

];
function like (id){
    likes[id]++;
    spans[id].innerHTML = likes[id] + "likes"
}





