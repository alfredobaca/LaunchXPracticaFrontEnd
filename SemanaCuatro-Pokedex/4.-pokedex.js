const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");

    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();


  
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/error.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let tipo = data.types[0].type.name;
            console.log(tipo);
            tipoPok(tipo);
        
            
            let moves = data.moves[1].move.name;
            console.log(moves);
            movPok(moves);

            let estadistica = data.stats[5].stat.name;
            console.log(estadistica);
            statsPok(estadistica);
        }
        
       
    });


}

function pokeImage  (url) {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const tipoPok = (url) => {
    tipo = document.getElementById("tipoP");
    tipo.textContent = url;
}
const movPok = (url) => {
    mP = document.getElementById("MovP");
    mP.textContent = url;
}
const statsPok = (url) => {
    sP = document.getElementById("StatP");
    sP.textContent = url;
}

