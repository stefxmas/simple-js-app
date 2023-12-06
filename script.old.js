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
    pokemonList.forEach(function(ithem) {
        console.log(ithem);
      
      });

   
//modal
// function showModal(name, img,) {
  //   modalContainer.innerHTML = '';  

  //   let modal = document.createElement('div');
  //   modal.classList.add('modal');
    
  //   let closeButtonElement = document.createElement('button');
  //   closeButtonElement.classList.add('modal-close');
  //   closeButtonElement.innerText = 'Close'
  //   closeButtonElement.addEventListener('click', hideModal);

  //   let titleElement = document.createElement('h1');
  //   titleElement.innerText = name;

  //   let imageElement = document.createElement('img');
  //     imageElement.src = img;

  // modal.append(closeButtonElement);
  // modal.append(titleElement);
  // // modal.appendChild(contentElement);
  // modal.append(imageElement);
  // modalContainer.appendChild(modal);

  // modalContainer.classList.add('is-visible');
  // }

  // window.addEventListener('keydown', (e) => {
  //   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
  //     hideModal();
  //   }
  // });

  // function hideModal() {
  //   modalContainer.classList.remove('is-visible');

// window.addEventListener('keydown', (e) => {
//       if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//         hideModal();
//       }
//     });

    //document.querySelector('#show-modal').addEventListener('click', () => {
   //   showModal('Modal title', 'This is the pokedex content!');
   // });
    
  // modalContainer.addEventListener('click', (e) => {
  //   let target = e.target;
  //   if (target === modalContainer) {
  //     hideModal();
  //   }
  // });
  // }
