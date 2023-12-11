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

function showDetails(item){
  pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
  });
}

//search button 
searchButton.addEventListener('click', function() {
  // get the search input value
  const searchTerm = searchInput.value;
  // do something with the search term (e.g. redirect to a search results page)
  console.log(`Searching for "${searchTerm}"...`);
});

<span role="button">
              <i class="fa fa-search" aria-hidden="true"></i>
          </span>

let form = document.querySelector(".form-inline")
, input = document.createElement("input");
function searchFunction() {
  let t, e, n, o, i;
  for (n = 0,
  t = input.value.toUpperCase(),
  e = document.getElementsByClassName("list-group-item"); n < e.length; n++)
      (o = (i = e[n].getElementsByClassName("button-class")[0]).innerText).toUpperCase().indexOf(t) > -1 ? e[n].style.display = "" : e[n].style.display = "none"
}
input.classList.add("form-control"),
input.setAttribute("type", "text"),
input.setAttribute("placeholder", "Search"),
input.setAttribute("aria-label", "Search"),
form.appendChild(input),
input.addEventListener("keyup", searchFunction);