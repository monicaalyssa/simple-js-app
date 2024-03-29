
let pokemonRepository = (function () {

    let pokemonList = []; 
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log ("Pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }
    
    function addListItem(pokemon) {
        let pokemonListHtml = document.querySelector('ul');
        pokemonListHtml.classList.add('pokemon__grid');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.classList.add(pokemon.name)
        button.innerText = pokemon.name
        button.classList.add('pokemon__name')
        listItem.appendChild(button);
        pokemonListHtml.appendChild(listItem);
        button.addEventListener('click', function() {
            showDetails(pokemon);
        });
        let pokemonImage = document.createElement('img');
        pokemonImage.classList.add('pokemon__image');
       /* 
        pokemonImage.classList.add(pokemon.name); 
        let imageLink = ('images/' + pokemon.name + '.png');
        pokemonImage.src = imageLink;
       */
        button.appendChild(pokemonImage);
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () 
        {
            console.log(item);
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
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default; 
            item.height = details.height;
            item.types = details.types; 
        }).catch(function (e) {
            console.error(e);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList, 
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});



