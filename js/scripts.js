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
        
          return {
            add: add,
            getAll: getAll
          };
        })();
        
        // add 
        pokemonRepository.add({ name: "Pikachu", type: "Electric", height:"0.4" });
        
        // display
        pokemonRepository.getAll().forEach(function(pokemon){
        console.log(pokemon);
        document.write(pokemon.name + " (height: " + pokemon.height + ") , (type: " + pokemon.type + ") ");
        });
    