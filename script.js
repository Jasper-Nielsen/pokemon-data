"use strict";

window.addEventListener("load", initApp);

const abra = {
  name: "Abra",
  description:
    "Abra can teleport in its sleep. Apparently the more deeply Abra sleeps, the farther its teleportations go. ",
  ability: "Teleport",
  image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png`,
  footprint: `https://archives.bulbagarden.net/media/upload/9/9a/F0063.png`,
  dexindex: 63,
  type: "Psychic",
  subType: "Undefined",
  weakness: "Ghost, Dark, Bug",
  gender: "male",
  weight: 19.5,
  height: 0.9,
  generation: 1,
  spilversion: "1",
  canEvolve: true,
  statsHP: 2,
  statsAttack: 2,
  statsDefense: 1,
  statsSpecialAttack: 7,
  statsSpecialDefense: 4,
  statsSpeed: 6,
};

console.log(JSON.stringify(abra));


async function initApp() {

  addPokemonToList(abra);
  displayPokemonInGrid(abra);
}

async function getPokemon(url){
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayPokemonInGrid(pokemon) {
  document.querySelector("#pokemon-grid").insertAdjacentHTML(
    "beforeend",
    /*html*/ ` <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                
            </article>
`
  );
}

function addPokemonToList(pokemon) {
  const html = /*html*/ `
    <img src=${pokemon.image}> 
    <li>Name: ${pokemon.name}</li>
    <li>Description: ${pokemon.description}</li>
    <li>Ability: ${pokemon.ability}</li>
    <li> <img src=${pokemon.footprint}> </li>
    <li>Dexindex: ${pokemon.dexindex}</li>
    <li>Type: ${pokemon.type}</li>
     li>Subtype: ${pokemon.subType}</li>
    <li>Weakness: ${pokemon.weakness}</li>
    <li>Gender: ${pokemon.gender}</li>
    <li>Weight:${pokemon.weight}</li>
    <li>Height: ${pokemon.height}</li>
    <li>Generation: ${pokemon.generation}</li>
    <li>Spilversion: ${pokemon.spilversion}</li>
    <li>Can Evolve: ${pokemon.canEvolve}</li>
    <li>HP: ${pokemon.statsHP}</li>
    <li>Attack: ${pokemon.statsAttack}</li>
    <li>Defese: ${pokemon.statsDefense}</li>
    <li>SpecialAttack: ${pokemon.statsSpecialAttack}</li>
    <li>SpecialDefense: ${pokemon.statsSpecialDefense}</li>
    <li>Speed: ${pokemon.statsSpeed}</li>
    `;

  document
    .querySelector("#dialog-window")
    .insertAdjacentHTML("beforeend", html);
}
