const API_URL = 'https://pokeapi.co/api/v2/pokemon'

const nav_bar = document.getElementById('nav');


const call = async function API_CALL(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
}

const main = async function (url) {
    const a = await call(url).then((response) => {
        console.log(response);
    });
}

const fatchedData = main(API_URL)

console.log(fatchedData);

fatchedData.map(el => {
    var li = document.createElement('li')
    li.innerHTML = el;
    tr.appendChild(li);
})