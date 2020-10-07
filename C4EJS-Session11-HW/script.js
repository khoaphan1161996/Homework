const root_url = "https://pokeapi.co/api/v2/pokemon"
const content = document.getElementById("content")
let datas = []
let pokemonname = []

async function getPokemon(){
    for(let i = 1 ; i <= 54 ; i++){
        const res = await fetch(root_url + `/${i}`);
        const data = await res.json();
        datas.push(data)
        pokemonname.push(data.name)
    }
    content.insertAdjacentHTML('beforeend', createPokemon(datas))
    console.log(pokemonname)
    console.log(datas)
    click()
    datas = []
}

getPokemon()

function createPokemon(list_pokemon){
    return list_pokemon.map(function(pokemon,i){
        return `
        <div class = "poke">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png">
        <h3 class="order">#${i+1}</h3>
        <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <h4>Type: ${pokemon.types[0].type.name}</h4>
        <h4>Weight: ${pokemon.weight}</h4>
        </div>
        `
})
}

let input = document.getElementById("input")
let btn = document.getElementById("btn")
let poke = document.getElementsByClassName("poke")

function click(){
    for(let i = 0 ; i < 54 ; i++){
        poke[i].addEventListener('click', function(e){
            content.textContent = ""
            get1Pokemon(i)
        })
    }
}

async function get1Pokemon(i){
    const res = await fetch(root_url + `/${i+1}`);
    const data = await res.json();
    content.insertAdjacentHTML('beforeend', create1Pokemon(data,i+1))
}

function create1Pokemon(list_pokemon,i){
    return `
        <div class = "poke">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png">
        <h3 class="order">#${i}</h3>
        <h2>${list_pokemon.name.charAt(0).toUpperCase() + list_pokemon.name.slice(1)}</h2>
        <h4>Type: ${list_pokemon.types[0].type.name}</h4>
        <h4>Weight: ${list_pokemon.weight}</h4>
        </div>
        `
}

let btn_back = document.getElementById("btn_back")
btn_back.addEventListener('click', function(){
    content.innerHTML = ""
    pokemonname = []
    getPokemon()
})

let btn_click = document.getElementById("btn_click")
btn_click.addEventListener('click', find)
function find(){
    console.log(pokemonname)
        let input_value = input.value
        for(let i = 0 ; i < pokemonname.length ; i ++){
            if(pokemonname[i] == input_value){
                content.textContent = ""
                get1Pokemon(i)
            }
        }
    }

// Viết 1 tập hợp có tên sau đó so sánh với click input