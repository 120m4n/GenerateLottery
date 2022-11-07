let primarySeed;

// given a elemente and a parent element, append the element to the parent
const appendElement = function (element, parent) {
    parent.appendChild(element);
};

// given a string, create a text node and return it
const createTextNode = function (text) {
    return document.createTextNode(text);
};

function showContent(seed) {
    let lottery;


    var temp = document.getElementsByTagName("template")[0];
    let parent = document.querySelector('#container');
    var clon = temp.content.cloneNode(true);
    if (seed) {
        lottery = calculateEquis(reduceToSixArray(seed));
        let values = calculateEquisValues(reduceToSixArray(seed));
        setIconBackground(clon,values);

        clon.querySelector('.lotteryNumber').innerText = lottery;
        clon.querySelector('.seed').innerText = seed;
    }
    appendElement(clon, parent);
}

const setInnerTextToElement = function (element, text) {
    element.innerHTML = `<span>${text}</span>`;
};  

// set background image to element
function setBackgroundImage(element, image) {

    element.style.backgroundImage = `url(${image})`;
    element.style.backgroundSize = 'cover';
}

function setIconBackground(element,values) {

    setBackgroundImage(
      element.querySelector(".divTop"),
      `./images/star_${values[0]}.png`
    );
    setBackgroundImage(
        element.querySelector(".divLeft"),
        `./images/star_${values[1]}.png`
    );
    setBackgroundImage(
        element.querySelector(".divRight"),
        `./images/star_${values[2]}.png`
    );

    setBackgroundImage(
        element.querySelector(".divBottom"),
        `./images/star_${values[3]}.png`
    );

}	

// given a integer n value return a random number of length n
const getRandomNumber = function (n) {
    return Math.floor(Math.random() * Math.pow(10, n));
};


const setDate = function () {
    let todayDate = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    document.getElementById('todayDate').innerHTML = todayDate;
}

// set primarySeed from todayDate

const setPrimarySeed = function () {
    let todayDate = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    console.log(todayDate);
    primarySeed = cleanDate(todayDate);
    showContent(primarySeed);
}

// clean date format
function cleanDate(date) {
    // eliminate '.' or spaces from date
    date = date.replace(/\./g, '');
    date = date.replace(/\s/g, '');
    date = date.replace(/-/g, '');
    date = date.replace(/\//g, '');
    return date;
}

// given a integer return the integer value in string format
const getNumberAsString = function (number) {
    return number.toString();
};

function onlyNumberKey(evt) {        
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

const validateValue = function (value) {
    if (value.length >= 6) {
        return true;
    }
    return false;
}

const processValue = function () {
    let value = document.getElementById('seed').value;
    if (validateValue(value)) {
        showContent(value);
    } else {
        alert('El valor debe ser de 6 al menos digitos');
    }
}

// generate all dates from the 12 dic 2019 to the now date, only saturdays are valid
// for the lottery
function generateDates() {
    let date = new Date('2019-12-12');
    let now = new Date();
    let dates = [];
    while (date <= now) {
        if (date.getDay() === 6) {
            dates.push(date.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: '2-digit'}));
        }
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

// given a seed return a lottery number
function lotteryNumber(seed) {
    let lottery = calculateEquis(reduceToSixArray(seed));
    return lottery;
}

// closeCard
function closeCard(thisCard) {

    let card = thisCard.parentElement;
    card.remove();
}





// window loading finished
window.onload = function () {
    //setDate();
    setPrimarySeed();
/*     let dates = generateDates();
    let cleanDates = dates.map(cleanDate);
    //console.log(cleanDates);
    // let lotteryNumbers = cleanDates.map((seed) => {
    //     return{
    //     "seed" : seed,
    //     "lottery":lotteryNumber(seed)}});
    let lotteryNumbers = cleanDates.map(lotteryNumber);
    // order in inverse order
    lotteryNumbers = lotteryNumbers.reverse();
    console.log(lotteryNumbers); */

}
