// GIVEN

// var example = " i'm the example ";
// console.log(example);


let example = " i'm the example ";
console.log(example);

// ejercicio 1
var hello = 'Hello Word';
console.log('hello');

// ejercicio 2
var needles = 'haystack';
console.log(needles);
function test(){
    var needle = "magnet"
    console.log(needle);

}
test();

// ejercicio 3 
var brendans = 'super cool'
function print(){
    brendan = 'only okay';
    console.log(brendan);
};

console.log(brendans);
print();


// ejercicio 4

var food = 'chicken';
console.log(food);

function eat (){
    food = "half-chiken";
    console.log(food);
    var food = 'gone';  
    console.log(food);
}
eat();

// ejercicio 5


var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);


// ejercicio 6

var genre = "disco";
console.log(genre);

function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();

console.log(genre);

// ejercicio 7



function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();

dojo = "san jose";
console.log(dojo);
console.log(dojo);



// ejercicio 8


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.students= "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));


