let pokemonRepository = (function () {

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    
    
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
    
    console.log(pokemonRepository.getAll());
    //pokemonRepository.add({ name: "Pikachu", type: "Electric", height:"0.4" });
    
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
    
    