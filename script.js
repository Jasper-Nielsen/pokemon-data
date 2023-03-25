"use strict";

window.addEventListener("load", initApp);

// const abra = {
//   name: "Abra",
//   description:
//     "Abra can teleport in its sleep. Apparently the more deeply Abra sleeps, the farther its teleportations go. ",
//   ability: "Teleport",
//   image: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png`,
//   footprint: `https://archives.bulbagarden.net/media/upload/9/9a/F0063.png`,
//   dexindex: 63,
//   type: "Psychic",
//   subType: "Undefined",
//   weakness: "Ghost, Dark, Bug",
//   gender: "male",
//   weight: 19.5,
//   height: 0.9,
//   generation: 1,
//   spilversion: "1",
//   canEvolve: true,
//   statsHP: 2,
//   statsAttack: 2,
//   statsDefense: 1,
//   statsSpecialAttack: 7,
//   statsSpecialDefense: 4,
//   statsSpeed: 6,
// };

// console.log(JSON.stringify(abra)); prints JSON formatted data on abra to be inserted in pokemon.JSON

async function initApp() {
  const abra = await getPokemonData(
    "https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemon.JSON"
  );

  displayPokemonInGrid(abra);
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
    /*html*/ ` <article class="grid-item">
                <img src="${pokemon.image}">
                <h2>${pokemon.name}</h2>
                
            </article>   
`
  );

  document
    .querySelector("#pokemon-grid article:last-child")
    .addEventListener("click", modalWindowClicked);

  document
    .querySelector("#dialog-window")
    .addEventListener("click", addPokemonToList(pokemon));
}

function modalWindowClicked() {
  document.querySelector("#dialog-window").showModal();
}

function addPokemonToList(pokemon) {
  // const html = /*html*/ `
  // <div id=dialog-grid>
  // <section>
  //   <img id="pokemon-image" src=${pokemon.image}>
  // </section>
  // <section>
  //     <li id="name">Name: ${pokemon.name}</li>
  //     <li id="description">Description: ${pokemon.description}</li>
  //     <li id="ability">Ability: ${pokemon.ability}</li>
  //     <li id="dexindex" >Dexindex: ${pokemon.dexindex}</li>
  //     <li id="type"> Type: ${pokemon.type}</li>
  //     <li id="subtype">Subtype: ${pokemon.subType}</li>
  //     <li id="weakness">Weakness: ${pokemon.weakness}</li>
  //     <li id="gender">Gender: ${pokemon.gender}</li>
  //     <li id="weight">Weight:${pokemon.weight}</li>
  //     <li id="height">Height: ${pokemon.height}</li>
  //     <li id="generation">Generation: ${pokemon.generation}</li>
  //     <li id="spilversion">Spilversion: ${pokemon.spilversion}</li>
  //     <li id="can-evolve">Can Evolve: ${pokemon.canEvolve}</li>
  //     <li id="health-points">HP: ${pokemon.statsHP}</li>
  //     <li id="attack">Attack: ${pokemon.statsAttack}</li>
  //     <li id="defense">Defese: ${pokemon.statsDefense}</li>
  //     <li id="special-attack">SpecialAttack: ${pokemon.statsSpecialAttack}</li>
  //     <li id="special-defense">SpecialDefense: ${pokemon.statsSpecialDefense}</li>
  //     <li id="speed">Speed: ${pokemon.statsSpeed}</li>
  // </section>
  // <section>
  //     <li> <img id="footprint-image" src=${pokemon.footprint}> </li>
  // </section>
  // </div>
  //   `;
  document.querySelector("#pokemon-image").src = pokemon.image;
  document.querySelector("#name").textContent = pokemon.name;
  document.querySelector("#description").textContent = pokemon.description;
  document.querySelector("#ability").textContent = pokemon.ability;
  document.querySelector("#dexindex").textContent = pokemon.dexindex;
  document.querySelector("#type").textContent = pokemon.type;
  document.querySelector("#subtype").textContent = pokemon.subtype;
  document.querySelector("#weakness").textContent = pokemon.weakness;
  document.querySelector("#gender").textContent = pokemon.gender;
  document.querySelector("#weight").textContent = pokemon.weight;
  document.querySelector("#height").textContent = pokemon.height;
  document.querySelector("#generation").textContent = pokemon.generation;
  document.querySelector("#spilversion").textContent = pokemon.name;
  document.querySelector("#can-evolve").textContent = pokemon.name;
  document.querySelector("#health-points").textContent = pokemon.name;
  document.querySelector("#attack").textContent = pokemon.name;
  document.querySelector("#defense").textContent = pokemon.name;
  document.querySelector("#special-attack").textContent = pokemon.name;
  document.querySelector("#special-defense").textContent = pokemon.name;
  document.querySelector("#speed").textContent = pokemon.name;
  document.querySelector("#footprint-image").src = pokemon.footprint;

  document
    .querySelector("#dialog-window")
    .insertAdjacentHTML("beforeend", html);
}
