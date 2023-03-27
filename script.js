"use strict";

window.addEventListener("load", initApp);



async function initApp() {
  const pokemons = await [getPokemonData(
    "https://raw.githubusercontent.com/Jasper-Nielsen/pokemon-data/main/pokemon.JSON"
  )];

  pokemons.foreach(displayPokemonInGrid()); 
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
              <div id="grid-image-container">
                <img id="grid-image" src="${pokemon.image}">
              </div>
                <h2>${pokemon.name}</h2>
                
            </article>   
`
  );

  // makes item clickable and shows dialogWindow
  document
    .querySelector("#pokemon-grid article:last-child")
    .addEventListener("click", modalWindowClicked);

  // add pokemons on click
  document
    .querySelector("#dialog-window")
    .addEventListener("click", addPokemonToList(pokemon));

  // document
  //   .querySelector("#pokemon-grid article:last-child")
  //   .addEventListener("click", applyBackgroundBasedOnType(pokemon));
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
  // //   `;
  //  document
  //    .querySelector("#dialog-window")
  //    .insertAdjacentHTML("beforeend", html);

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

  document.querySelector(
    "#gender"
  ).textContent = `Gender: ${capatilizeFirstLetterGender(pokemon)}`;

  document.querySelector("#weight").textContent = `Weight: ${pokemon.weight}kg`;
  document.querySelector("#height").textContent = `Height: ${pokemon.height}cm`;
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
  document.querySelector("#footprint-text").textContent=`Footprint: `;
  document.querySelector("#footprint-image").src = pokemon.footprint;



  applyBackgroundBasedOnType(pokemon);
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
  if (pokemon.type == `Psychic`) {
    document.querySelector("#dialog-window").classList.add("psychic-background");
  } else
    document.querySelector("#dialog-window").classList.add("blue-background");

  /*
     Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy */
}
