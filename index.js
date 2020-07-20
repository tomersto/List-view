/* Create a code that generates cars and draws them in list view and card view,
Paramaters = 
1. Type
2. Color
3. Liscense plate */

const DOM = {};
let countries = []

const displayFunctions = {
    "cards": drawCard,
    "list": drawList
};

(async function () {
    countries = await getAllCountries();
    DOM.countriesDiv = document.getElementById("countriesList");
    DOM.searchBar = document.getElementById("searchBar");
    DOM.cardsButton = document.getElementById("cardsViewButton");
    DOM.lIstViewButton = document.getElementById("lIstViewButton");
    DOM.containerDiv = document.getElementById("containerDiv");
    DOM.lIstViewButton.addEventListener("click", () => draw(countries, DOM.countriesDiv, "list"));
    DOM.cardsButton.addEventListener("click", () => draw(countries, DOM.containerDiv, "cards"));
    console.log(countries);

}())

function clearDom() {
    DOM.containerDiv.innerHTML = ""
    DOM.countriesDiv.innerHTML = ""
}

function draw(data, container, displayType) {
    if (!Array.isArray(data)) return
    if (typeof container !== "object") return
    if (typeof displayType !== "string") return
    clearDom()
    const relevantFunction = displayFunctions[displayType]
    data.forEach(item => {
        container.append(relevantFunction(item))
    })
}

function drawCard(item) {
    let mainCardDiv = document.createElement('div')
    mainCardDiv.id = item.id
    mainCardDiv.classList.add('card')
    mainCardDiv.style.width = '18rem'

    let cardImage = document.createElement("img")
    cardImage.src = item.flag
    cardImage.classList.add("card-img-top")
    mainCardDiv.append(cardImage)

    let secondCityDiv = document.createElement('div')
    secondCityDiv.classList.add('card-body')
    mainCardDiv.append(secondCityDiv)

    let cityNameH = document.createElement('h5')
    cityNameH.classList.add('card-title')
    cityNameH.innerHTML = item.name
    secondCityDiv.append(cityNameH)


    return mainCardDiv

}

function drawList(item) {
    let mainUl = document.createElement('ul')
    mainUl.classList.add('list-group')

    let mainLi = document.createElement('li')
    mainLi.classList.add('list-group-item')
    mainLi.innerHTML = item.name
    mainUl.append(mainLi)

    return mainUl
}


/* <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
</ul> */
