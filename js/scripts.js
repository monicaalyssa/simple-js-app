
let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: 'Pichu',
            height: 1,
            type: 'Electric'
        },
        {
            name: 'Marill',
            height: 1.4,
            type: ['Water', 'Fairy']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        {
            name: 'Natu',
            height: 0.8,
            type: ['Psychihc', 'Flying']
        },
        
    ];

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
        pokemonImage.classList.add(pokemon.name);
        let imageLink = ('images/' + pokemon.name + '.png');
        pokemonImage.src = imageLink;
        button.appendChild(pokemonImage);
    };

    function showDetails(pokemon) {
            console.log(pokemon.name);
        };

    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        },
        addListItem: addListItem
    };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });



