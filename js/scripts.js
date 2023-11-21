let pokemonRepository = (function () {

    let pokemonList = [
      {name:"Charmander", type:"Fire", height:"0.6"},
      {name:"Machop", type:"fighting", height:"1.2"},
      { name:"Gengar", type:["ghost","poison"], height:"3"}
    ];
    
    
    function getAll() {
      return pokemonList;
    }
    
    function add (pokemon) {
      pokemonList.push(pokemon);
    }
    
    function showDetails (pokemon) {
      consol.log(pokemon);
    
    }
      
    function addListIthem (pokemon) {
      let pokemonList = document.querySelector(".pokemon-list");
      let listItem = document.createElement("li");
      let button = document.createElement("button");
      button.innerText = pokemon.name;
      button.classList.add("button-class");
      button.addEventListener('click', function (pokemon) {
        console.log(pokemon.target.innerText);
        
        //my_element.addEventListener("click", function (e) {
        //  console.log(this.className); // logs the className of my_element
         // console.log(e.currentTarget === this); // logs `true`
       // });
        
        //let target = pokemon;
        //showDetails(target);
       // target.classList.toggle('button');
        
        //pokemon.target; button
       // pokemon.type; click
      
      });
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
    }
    return {
      add: add,
      getAll: getAll,
      addListItem: addListIthem,
      showDetails: showDetails,
     
    
    };
    })();
    
    console.log(pokemonRepository.getAll());
    pokemonRepository.add({ name: "Pikachu", type: "Electric", height:"0.4" });
    
    console.log(pokemonRepository.getAll());
    
    pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    
    })
    
    