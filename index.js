/* Create a code that generates cars and draws them in list view and card view,
Paramaters = 
1. Type
2. Color
3. Liscense plate */

const types = ["mazda", "bmw", "toyota", "hyundai", "suzuki"]
const colors = ["red", "blue", "yellow", "green"]
const DOM = {};
const cars = []

const displayFunctions = {
    "cards": drawCard,
    "list": drawList
};
const carDetails = {
    lp: generateLp,
    type: generateType,
    color: generateColor,
}

const car = carDetails;


(function () {
    DOM.searchBar = document.getElementById("searchBar")
    DOM.cardsButton = document.getElementById("cardsViewButton")
    DOM.cardButton = document.getElementById("cardsViewButton")
    DOM.lIstViewButton = document.getElementById("lIstViewButton")
    DOM.containerDiv = document.getElementById("containerDiv")
    DOM.whattodraw = "cards";




    DOM.cardButton.click("click", draw(cars, containerDiv, "cards"))

    draw(cars, containerDiv,)








}())
function draw(carDetails, containerDiv, displayType) {

    const relevantFunction = displayFunctions[displayType]
    cars.forEach(car => {
        containerDiv.append(relevantFunction(car))
    })




}

function generateCar() {
    let car = carDetails
    return car;

}

function generateLp() {
    let lp = Math.round(Math.random() * 999999)

    return lp
}

function generateType() {
    let type = types[Math.floor(Math.random() * types.length)]
    return type;
}






function generateColor() {
    let color = colors[Math.floor(Math.random() * colors.length)]
    return color

}





function drawCard() {
    let mainCarDiv = document.createElement('div')
    mainCarDiv.id = id
    mainCarDiv.classList.add('card')
    mainCarDiv.style.width = '18 rem'
    document.body.append(mainCarDiv)

    let secondCityDiv = document.createElement('div')
    secondCityDiv.classList.add('card-body')
    mainCityDiv.append(secondCityDiv)

    let cityNameH = document.createElement('h5')
    cityNameH.classList.add('card-title')
    cityNameH.innerHTML = cityName
    secondCityDiv.append(cityNameH)

}

function drawList() {

}
console.log(cars)