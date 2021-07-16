/*
// import data from './data/lol/lol.js';

// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/

/*
let users= data.pokemon;
function hola(users){
for(let i=0; i<users.length; i++){
    let num= (users[i]["num"]);
    console.log(num);
    let newDiv= document.createElement("div");
    newDiv.innerHTML=("hola"+ num);
   document.body.appendChild(newDiv);
}
   hola(users);*/

import dataManipulator from "./data.js";
import data from "./data/pokemon/pokemon.js";
let pokemonCharac=[];

function visualize(data) {
  for (let prop in data["pokemon"]) {
    let numero = data["pokemon"][prop]["num"];
    let nombre = data["pokemon"][prop]["name"];
    let link = data["pokemon"][prop]["img"];
    let div = document.createElement("div");
    /*div.id = "div-poke-" + prop
        div.class = "divs-poke"*/
    div.setAttribute("class", "divs-poke");
    div.setAttribute("id", "div-poke-" + prop);
    let imgn = document.createElement("img");
    imgn.src = link;
    /*imgn.style.display="flex"*/
    let divroot = document.getElementById("root");

    divroot.appendChild(div);
    div.appendChild(imgn);
    let div2 = document.createElement("div");
    /*div2.style.display="flex"*/
    let pNum = document.createElement("p");
    pNum.innerText = numero;

    let pName = document.createElement("p");
    pName.innerText = nombre;

    div2.appendChild(pNum);
    div2.appendChild(pName);
    div.appendChild(div2);
  }
  console.log()
}
visualize(data);

const selectElement = document.getElementById("sort");
selectElement.addEventListener("change", (event) => {
  let sortBy;
  let sortOrder;
  if (event.target.value == "az") {
    sortBy = "name";
    sortOrder = "asc";
    dataManipulator.sortData(data, sortBy, sortOrder);
  } else if (event.target.value == "za") {
    sortBy = "name";
    sortOrder = "dsc";
    dataManipulator.sortData(data, sortBy, sortOrder);
  } else if (event.target.value == "numa") {
    sortBy = "num";
    sortOrder = "asc";
    dataManipulator.sortData(data, sortBy, sortOrder);
  } else if (event.target.value == "numd") {
    sortBy = "num";
    sortOrder = "dsc";
    dataManipulator.sortData(data, sortBy, sortOrder);
  }
});




const searchBar= document.getElementById('search')

searchBar.addEventListener('keyup',(e)=>{
    console.log(e.target.value);

});