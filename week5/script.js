//LIST ALL DOG BREEDS
async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedList(data.message)
}
start()
//SELECTING DOG BREED
function createBreedList(breedList){
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
        <option>Select a breed</option>
        ${Object.keys(breedList).map(function(breed){
            return `<option>${breed}</option>`
        }).join('')}
        </select>
    `
}
//LOAD IMAGE BY BREED
async function loadByBreed(breed){
    if (breed != "Select a breed"){
        const response = await fetch (`https://dog.ceo/api/breed/${breed}/images`)
        const image = await response.json()
        console.log(image)
        createSlideshow(image.message)
    }
}
//DISPLAY IMAGE
function createSlideshow(image){
    let randomNumberURL = image[Math.floor(Math.random()*image.length)];
    photo.innerHTML = `<img src="${randomNumberURL}"/>`;
}
//BUTTONS
document.getElementById("reset").addEventListener("click", start)
document.getElementById("random").addEventListener("click", randomLoad)
//RANDOM API
async function randomLoad(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random/3")
    const rando = await response.json()
    getRandomDoggo(rando.message)
}
//DISPLAY RANDOM IMAGE
function getRandomDoggo(rando){
    let randomPlace = rando[Math.floor(Math.random()*rando.length)];
    photo.innerHTML = `<img src="${randomPlace}"/>`;
}