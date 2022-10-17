const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'
const SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species'


const nav_bar = document.getElementById('nav');
const height_div = document.getElementById("height");
const weight_div = document.getElementById("weight");
const name_div = document.getElementById("pokemon-name");
const img_div = document.getElementById("pokemon-image");
const desc_div = document.getElementById("description");


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
        let li = document.createElement('li');
        li.innerHTML = `${('0000' + (index + 1)).slice(-4)}  ${el.name}`;
        document.getElementById('nav').appendChild(li);
        li.addEventListener('click', (event) => {
            main_spec(POKEMON_URL + '/' + el.name, index);
            desc_spec(SPECIES_URL + '/' + el.name);

            let current = document.getElementsByClassName("active");

            if (current.length > 0) current[0].className = current[0].className.replace("active", "");

            event.target.className = 'active';
        })

    })
}

async function main_spec(url, index) {
    let data = await call(url);

    height_div.textContent = weight_div.textContent = name_div.textContent = ''

    if (data !== undefined) {
        height_div.textContent += data.height;
        weight_div.textContent += data.weight;
        name_div.textContent += `${('0000' + (index + 1)).slice(-4)}  ${data.name}`;
        img_div.src = data.sprites.front_default;
    }


}

async function desc_spec(url, index) {
    let data = await call(url);

    desc_div.textContent = ''

    if (data !== undefined) {
        return desc_div.textContent += data.flavor_text_entries[11].flavor_text;
    }

    desc_div.textContent += 'No description provided for that pokemon';
}


main(POKEMON_URL + '?limit=100000&offset=0')

