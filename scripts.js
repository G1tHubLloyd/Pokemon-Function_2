let pokemonRepository = (function () {
  let pokemonList = [];
  let pokemonRepository = (function () {
    let pokemonList = [];

    // ✅ Validate and add a Pokémon object to the list
    function add(pokemon) {
      let expectedKeys = ['name', 'type'];

      if (
        typeof pokemon === 'object' &&
        pokemon !== null &&
        Object.keys(pokemon).length === expectedKeys.length &&
        expectedKeys.every(key => Object.keys(pokemon).includes(key))
      ) {
        pokemonList.push(pokemon);
      } else {
        console.warn('❌ Invalid Pokémon data. Please provide an object with "name" and "type".');
      }
    }

    // 🔍 Filter Pokémon by name (case-insensitive)
    function findByName(name) {
      return pokemonList.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase());
    }

    // 📦 Return the full Pokémon list
    function getAll() {
      return pokemonList;
    }

    return {
      add: add,
      getAll: getAll,
      findByName: findByName
    };
  })();

  // 🧪 Add valid Pokémon
  pokemonRepository.add({ name: 'Bulbasaur', type: 'Grass/Poison' });
  pokemonRepository.add({ name: 'Charmander', type: 'Fire' });
  pokemonRepository.add({ name: 'Squirtle', type: 'Water' });

  // 🧪 Attempt to add invalid data
  pokemonRepository.add('Just a string'); // Won't be added
  pokemonRepository.add({ name: 'Pikachu' }); // Missing 'type' key

  // 🖥️ Display all Pokémon on the webpage
  let pokemonContainer = document.getElementById('pokemon-list');
  pokemonRepository.getAll().forEach(function (pokemon) {
    let pokemonItem = document.createElement('p');
    pokemonItem.textContent = `${pokemon.name} — Type: ${pokemon.type}`;
    pokemonContainer.appendChild(pokemonItem);
  });

  // 🧪 Search for a specific Pokémon by name
  console.log(pokemonRepository.findByName('Charmander')); // Should log only Charmander
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

// Add Pokémon
pokemonRepository.add({ name: 'Bulbasaur', type: 'Grass/Poison' });
pokemonRepository.add({ name: 'Charmander', type: 'Fire' });
pokemonRepository.add({ name: 'Squirtle', type: 'Water' });

// Reference the container div from index.html
let pokemonContainer = document.getElementById('pokemon-list');

// Display each Pokémon on the page
pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonItem = document.createElement('p');
  pokemonItem.textContent = `${pokemon.name} — Type: ${pokemon.type}`;
  pokemonContainer.appendChild(pokemonItem);
});