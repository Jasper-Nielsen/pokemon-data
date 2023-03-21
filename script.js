"use strict";

window.addEventListener("load", initApp);

const pokemon = document.querySelector(".pokemon");
const list = document.querySelector(".list");
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
  statsHP: 25,
  statsAttack: 20,
  statsDefense: 15,
  statsSpecialAttack: 105,
  statsSpecialDefense: 55,
  statsSpeed: 90,
};

function initApp() {
  addPokemonToList(abra);
}

function addPokemonToList(pokemon) {
  const html = /*html*/ `
    <li>Name: ${pokemon.name}</li>
    <li>Description: ${pokemon.description}</li>
    <li>Ability: ${pokemon.ability}</li>
     <img src=${pokemon.image}> 
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

  list.insertAdjacentHTML("beforeend", html);
}
