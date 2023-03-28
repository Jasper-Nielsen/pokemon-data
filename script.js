"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemonData(
    "https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemons.JSON"
  );

  pokemons.forEach(displayPokemonInGrid);
}

async function getPokemonData(url) {
  //await fetch(url) and respond
  const response = await fetch(url);
  // await respons.json() that is our data
  const data = await response.json();
  // before we return data we sort it
  sortPokemons(data);
  return data;
}

function sortPokemons(items) {
  items.sort(function (a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

function displayPokemonInGrid(pokemon) {
  document.querySelector("#pokemon-grid").insertAdjacentHTML(
    "beforeend",
    /*html*/ ` <article class="grid-item ${pokemon.type.toLowerCase()}">
              <h2>${pokemon.name}</h2>
                <img src="${pokemon.image}">
              
                
                <p>${pokemon.type}</p>
                
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
  ).textContent = `Description: ${pokemon.description}`;
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

  // applyBackgroundBasedOnType(pokemon);

  const dialog = document.querySelector("dialog");
  //sets the background on
  dialog.setAttribute("data-theme", pokemon.type.toLowerCase());

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

/*
     Normal, Fire,
     Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy */

function resetBackground() {
  //resets background so the former chosen won't stick
  document
    .querySelector("#dialog-window")
    .classList.remove("default", "fire", "psychic", "fighting");
}
