let pokemonList=[
    {name:"Charmander", type:"Fire", height:"0.6"},
    {name:"Machop", type:"fighting", height:"0.8"},
    { name:"Gengar", type:["ghost","poison"], height:"1.5"}
    ];
    
    let pokemonAux = {name:"test", type:"Fire", height:"0.6"};
    
    pokemonList.push(pokemonAux);
    console.log(pokemonList);
