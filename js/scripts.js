let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //let modalContainer = document.querySelector('#modal-container');

//code
// Create modal
function showModal(item) {
  let modalBody = document.querySelector('.modal-body');
  let modalTitle = document.querySelector('.modal-title');

  //Clear all existing modal content
  modalTitle.innerHTML = '';
  modalBody.innerHTML = '';

  //creating element for name in modal content
  let nameElement = document.createElement('h1');
  nameElement.innerText = item.name;
  //creating img in modal content
  let imageElement = document.createElement('img');
  imageElement.classList.add('modal-img');
  imageElement.setAttribute('src', item.imageUrl);
  imageElement.classList.add('float-right'); // bootstrap class
  //creating element for height in modal content
  let heightElement = document.createElement('p');
  heightElement.innerText = 'height: ' + item.height;
  //creating element for type in modal content
  function typeCount(item) {
      if(item.types.length === 2) {
          return item.types[0].type.name + ', ' + item.types[1].type.name;
      } else {
          return item.types[0].type.name;
      }
  }
  let typeElement = document.createElement('p');
  typeElement.innerText = 'type: ' + typeCount(item);

  //Add the new modal content
  modalTitle.appendChild(nameElement);
  modalBody.appendChild(imageElement);
  modalBody.appendChild(heightElement);
  modalBody.appendChild(typeElement);
}


  function getAll() {
    return pokemonList;
  }

  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.row');
    // creating li element inside the ul
    let listpokemon = document.createElement('li');
    listpokemon.classList.add('list-group-item'); // bootstrap class
    listpokemon.classList.add('col-12'); // bootstrap class
    listpokemon.classList.add('col-md-4'); // bootstrap class
    // creating button element inside the li
    let button = document.createElement('button');
    button.classList.add('btn'); // bootstrap class
    button.classList.add('btn-block');
    button.setAttribute('data-toggle', 'modal'); // bootstrap attr
    button.setAttribute('data-target', '#modal'); // bootstrap attr
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    // Append button to the li listpokemon as its child
    listpokemon.appendChild(button);
    // Append the li listpokemon to the ul pokemonList as its child
    pokemonList.appendChild(listpokemon);
    // Add event listener to button with the showDetails function
    button.addEventListener('click', function() {
        showDetails(pokemon);
    });
}

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log (pokemon)
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(ithem){
    let url = ithem.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      ithem.imageUrl = details.sprites.front_default;
      ithem.height = details.types;
      ithem.types = details.height;
    }).catch(function (e){
      console.error(e);
    })
  }

  function showDetails (pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function (){
    console.log(pokemon);
    showModal(pokemon.name, pokemon.imageUrl, pokemon.height, pokemon.types);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListIthem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,


  };
  })();

  //console.log(pokemonRepository.getAll());
  //pokemonRepository.add({ name: "Pikachu", type: "Electric", height:"0.4" });

  console.log(pokemonRepository.getAll());

  pokemonRepository.loadList().then(function() {
// Now the data is loaded!
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
});
});
