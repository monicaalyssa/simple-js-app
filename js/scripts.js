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



for (let i = 0 ; i < pokemonList.length; i++) {
    document.write("<br>")
    document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ")")
    if (pokemonList[i].height > 1.2) {
        document.write(" - Wow that's big!")
    }
}

