var name1 = "Tood E."
var name2 = "Phill."
var deconnections = 2;
var inconnections =500;

var myProfile = document.querySelector ("#nameProfile")
var removeProfile = document.querySelector("#content-top-right-container")
var decreseConnections = document.querySelector("#connections")
var addconnections = document.querySelector("#inconnections")
console.log(inconnections);

// ......changeProfile......

function changeProfile () {

    myProfile.innerHTML = name1 + " and " + name2;

    removeProfile.remove ();

    deconnections --;
    decreseConnections.innerHTML = deconnections;

    inconnections ++;
    addconnections.innerHTML = inconnections;


}




