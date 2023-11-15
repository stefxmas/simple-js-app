// let pokemonList=[
//     {name:"Charmander", type:"Fire", height:"0.6"},
//     {name:"Machop", type:"fighting", height:"1.2"},
//     { name:"Gengar", type:["ghost","poison"], height:"3"}
//     ];
    
//     for (let i=0; i<pokemonList.length; i++){
//       if (pokemonList[i].height <1 && pokemonList[i].height >0.5){
//         console.log(pokemonList[i].name + " is a small pokemon");
//         document.write('<p>' + pokemonList[i].name +' '+ pokemonList[i].height + ' '+ ' is a large pokemon</p>')
//       }else if (pokemonList[i].height >1 && pokemonList[i].height <1.5){
//         console.log(pokemonList[i].name + " is a medium pokemon");
//         document.write('<p>' + pokemonList[i].name +' '+  pokemonList[i].height + ' is a medium pokemon</p>')
//       }else {
//         console.log(pokemonList[i].name + " is a large pokemon");
//         document.write('<p>' + pokemonList[i].name +' '+  pokemonList[i].height +' is a large pokemon</p>')
//       }
//     }
//     pokemonList.forEach(function(ithem) {
//         console.log(ithem);
      
//       });
    

      let pokemonList=[
        {name:"Charmander", type:"Fire", height:"0.6"},
        {name:"Machop", type:"fighting", height:"1.2"},
        { name:"Gengar", type:["ghost","poison"], height:"3"}
        ];
        
        let pokemonRepository = (function () {
          let pokemonList = [
            {name:"Charmander", type:"Fire", height:"0.6"},
            {name:"Machop", type:"fighting", height:"1.2"},
            { name:"Gengar", type:["ghost","poison"], height:"3"}];
        
        
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
        
        //console.log(pokemonRepository.getAll());
        pokemonRepository.add({ name: "Pikachu", type: "Electric", height:"0.4" });
        console.log(pokemonRepository.getAll()); 
        
        pokemonList.forEach(function(pokemon){
        console.log(pokemon);
        document.write(pokemon.name + " (height: " + pokemon.height + ") , (type: " + pokemon.type + ") ");
        });
    