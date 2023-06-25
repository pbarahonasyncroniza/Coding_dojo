


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});












const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
const BListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(BListPkmn);

// devolver una serie de objetsos  donde solamente los identificadores (id)) es divisible por 3, vale decir es impares
const pkId = pokemon.filter(p => p.id % 3 === 0);
console.log(pkId);



const pkFire = pokemon.filter(p => p.types.includes("fire"));
console.log(pkFire);

// una variedad de objetos pokemon que tengan mas de un tipo
const pkMulti = pokemon.filter(p => p.types.length > 1);
console.log(pkMulti);

// una matriz con solo los nombres de pokemon
const pkName = pokemon.map(p => p.name);
console.log(pkName);

const PkNameId = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log(PkNameId);

const pkPoison = pokemon.filter(p => p.types.includes("poison")).map(p => p.name);

console.log(pkPoison);

const pkFlying = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
console.log(pkFlying);

const pkNormal = pokemon.filter(p => p.types[0] === "normal").length;   
console.log(pkNormal);