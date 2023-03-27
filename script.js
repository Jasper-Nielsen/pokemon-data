"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemonData(
    "https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemon.JSON"
  );

  pokemons.forEach(displayPokemonInGrid);
}

async function getPokemonData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

function displayPokemonInGrid(pokemon) {
  document.querySelector("#pokemon-grid").insertAdjacentHTML(
    "beforeend",
    /*html*/ ` <article class=grid-item>
              
                <img src="${pokemon.image}">
              
                <h2>${pokemon.name}</h2>
                
            </article>   
`
  );

  // makes item clickable and shows dialogWindow
  document
    .querySelector("#pokemon-grid article:last-child")
    .addEventListener("click", clickPokemon);

    

  function clickPokemon() {
    showPokemonModal(pokemon);
   
  }
}

function showPokemonModal(pokemon) {


  document.querySelector("#dialog-image").src = pokemon.image;
  document.querySelector("#name").textContent = `Name: ${pokemon.name}`;
  document.querySelector(
    "#description"
  ).textContent = `Desription: ${pokemon.description}`;
  document.querySelector(
    "#ability"
  ).textContent = `Abilitíes: ${pokemon.ability}`;
  document.querySelector(
    "#dexindex"
  ).textContent = `Pokedex Number: ${pokemon.dexindex}`;
  document.querySelector("#type").textContent = `Type: ${pokemon.type}`;
  document.querySelector(
    "#subtype"
  ).textContent = `Subtype: ${pokemon.subtype}`;
  document.querySelector(
    "#weakness"
  ).textContent = `Weakness: ${pokemon.weakness}`;

  document.querySelector("#gender").textContent = `Gender: ${pokemon.gender}`;

  document.querySelector(
    "#weight"
  ).textContent = `Weight: ${pokemon.weight} kg`;
  document.querySelector(
    "#height"
  ).textContent = `Height: ${pokemon.height} cm`;
  document.querySelector(
    "#generation"
  ).textContent = `Generation: ${pokemon.generation}`;
  document.querySelector(
    "#spilversion"
  ).textContent = `Gameversion: ${pokemon.spilversion}`;

  document.querySelector("#can-evolve").textContent = `Can evolve: ${canEvolve(
    pokemon
  )}`;

  document.querySelector(
    "#health-points"
  ).textContent = `Health points: ${pokemon.statsHP}`;
  document.querySelector(
    "#attack"
  ).textContent = `Attack: ${pokemon.statsAttack}`;
  document.querySelector(
    "#defense"
  ).textContent = `Defence: ${pokemon.statsDefence}`;
  document.querySelector(
    "#special-attack"
  ).textContent = `Special Attack: ${pokemon.statsSpecialAttack}`;
  document.querySelector(
    "#special-defense"
  ).textContent = `Special Defece: ${pokemon.statsSpecialDefence}`;
  pokemon.statsSpecialDefence;
  document.querySelector("#speed").textContent = `Speed: ${pokemon.statsSpeed}`;
  document.querySelector("#footprint-text").textContent = `Footprint: `;
  document.querySelector("#footprint-image").src = pokemon.footprint;

  applyBackgroundBasedOnType(pokemon);
  document.querySelector("#dialog-window").showModal();
  
 
 
   
  
}

function capatilizeFirstLetterGender(pokemon) {
  const firstLetter = pokemon.gender.charAt(0).toUpperCase();
  const restOfGender = pokemon.gender.substring(1);
  return `${firstLetter}${restOfGender}`;
}

function canEvolve(pokemon) {
  let status;
  if (pokemon.canEvolve === true) {
    status = `The pokemon can evolve`;
  } else status = `The pokemon can't evolve`;

  return status;
}

function applyBackgroundBasedOnType(pokemon) {

  const type= pokemon.type.toLowerCase();

  if (type === `psychic`) {
    document.querySelector("#dialog-window").classList.add("psychic");
  } else if (type === `fire`) {
    document.querySelector("#dialog-window").classList.add("fire");
  } else if (type=== `normal`) document.querySelector("#dialog-window").classList.add("default");
 
 
  /*
     Normal, Fire, 
     Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy */
}



function resetBackground(){
  document.querySelector("dialog-window").classList.remove("default", "fire", "psychic");
  console.log("background removed");
  


 
}

