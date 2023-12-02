let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  let modalContainer = document.querySelector('#modal-container');

//code

  function showModal(name, img,) {
    modalContainer.innerHTML = '';  

    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close'
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = name;

    let imageElement = document.createElement('img');
      imageElement.src = img;

  modal.append(closeButtonElement);
  modal.append(titleElement);
  // modal.appendChild(contentElement);
  modal.append(imageElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
  }
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  //document.querySelector('#show-modal').addEventListener('click', () => {
   //   showModal('Modal title', 'This is the pokedex content!');
   // });
   
  function hideModal() {
    modalContainer.classList.remove('is-visible');

// window.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//         hideModal();
//       }
//     });

    //document.querySelector('#show-modal').addEventListener('click', () => {
   //   showModal('Modal title', 'This is the pokedex content!');
   // });
    
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
  }

  function getAll() {
    return pokemonList;
  }

  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  function addListIthem (pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
      console.log(showDetails);
    });
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
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
