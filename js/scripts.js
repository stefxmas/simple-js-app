let pokemonList=[
    {name:"Charmander", type:"Fire", height:"0.6"},
    {name:"Machop", type:"fighting", height:"1.2"},
    { name:"Gengar", type:["ghost","poison"], height:"3"}
    ];
    
    for (let i=0; i<pokemonList.length; i++){
      if (pokemonList[i].height <1 && pokemonList[i].height >0.5){
        console.log(pokemonList[i].name + " is a small pokemon");
        document.write('<p>' + pokemonList[i].name +' '+ pokemonList[i].height + ' '+ ' is a large pokemon</p>')
      }else if (pokemonList[i].height >1 && pokemonList[i].height <1.5){
        console.log(pokemonList[i].name + " is a medium pokemon");
        document.write('<p>' + pokemonList[i].name +' '+  pokemonList[i].height + ' is a medium pokemon</p>')
      }else {
        console.log(pokemonList[i].name + " is a large pokemon");
        document.write('<p>' + pokemonList[i].name +' '+  pokemonList[i].height +' is a large pokemon</p>')
      }
    }
    
    