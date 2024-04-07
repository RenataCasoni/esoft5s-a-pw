window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const evolucao = urlParams.get('evolucao');

    document.title = `Página do ${evolucao}`;

    fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.setAttribute('src', data.sprites.front_default);
            img.setAttribute('alt', evolucao);

            document.body.appendChild(img);
        })
        .catch(error => console.error('Erro ao carregar Pokémon:', error));
};
