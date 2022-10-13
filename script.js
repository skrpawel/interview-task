const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'
const SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species'

let nav_bar = document.getElementById('nav');


async function call(url = POKEMON_URL) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        }).catch(function (error) {
            console.log(error);
        });
}


async function main(url) {
    let data = await call(url);
    data.results.map((el, index) => {
        var li = document.createElement('li')
        li.innerHTML = `${index} ${el.name}`
        document.getElementById('nav').appendChild(li);
    })
    // expected output: "resolved"
}


main(POKEMON_URL)