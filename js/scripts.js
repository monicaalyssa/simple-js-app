
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
        }
    ];

    return {
        add: function(pokemon) {
            pokemonList.push(pokemon);
        },
        getAll: function() {
            return pokemonList;
        }
    };

})();

pokemonRepository.getAll().forEach(function (pokemon) {
    document.write("<br>" + pokemon.name, " (Height: " + pokemon.height + ")")
    if (pokemon.height > 1.2) {
        document.write(" — Wow that's big!")
    }
});