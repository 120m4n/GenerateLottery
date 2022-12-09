import { calculateEquis, calculateEquisValues, reduceToSixArray } from "./lotteryLib.mjs";	
import { getRandomNumber } from "./myMathLib.mjs";

// given a elemente and a parent element, append the element to the parent
const appendElement = function (element, parent) {
    parent.appendChild(element);
};

// set background image to element
function setBackgroundImage(element, image) {

    element.style.backgroundImage = `url(${image})`;
    element.style.backgroundSize = 'cover';
}

function setIconBackground(element, values) {

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
  
  setBackgroundImage(
    element.querySelector(".close"),
    `./images/cancel.png`
  );
}	

function showContent(seed) {
   
  if ('content' in document.createElement('template')) {
    const container = document.querySelector('#container');
    const template = document.querySelector("#template");

    const clone = template.content.cloneNode(true);
    if (seed && clone) {
      let lottery = calculateEquis(reduceToSixArray(seed));
      let values = calculateEquisValues(reduceToSixArray(seed));
      setIconBackground(clone,values);

      clone.querySelector('.lotteryNumber').innerText = lottery;
      clone.querySelector('.seed').innerText = seed;

      container?.appendChild(clone);

    }
  } else {
    // Fallback to browser support, e.g. IE11
    throw new Error('No template support');
  }
}

const processValue = function () {
  let seed = document.getElementById('seed') || null;
  let value = seed?.value;
  if (!isNaN(value)) {
      showContent(value);
  } else {
      alert('El valor debe ser de 6 al menos digitos');
  }
  seed.value = '';
  
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

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear() - 2000;

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('');
}

const setPrimarySeed = function () {
    let todayDate = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
    console.log(todayDate);
    showContent(cleanDate(todayDate));
}


const setSecondarySeed = function () {
    let todayDate = new Date();
    console.log(formatDate(todayDate));
    showContent(formatDate(todayDate));
}

// Restricts input for the given textbox to the given inputFilter function.
export function setInputFilter(textbox, inputFilter, errMsg) {
  [ "input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop", "focusout" ].forEach(function(event) {
    textbox.addEventListener(event, function(e) {
      if (inputFilter(this.value)) {
        // Accepted value.
        if ([ "keydown", "mousedown", "focusout" ].indexOf(e.type) >= 0){
          this.classList.remove("input-error");
          this.setCustomValidity("");
        }

        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      }
      else if (this.hasOwnProperty("oldValue")) {
        // Rejected value: restore the previous one.
        this.classList.add("input-error");
        this.setCustomValidity(errMsg);
        this.reportValidity();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
      else {
        // Rejected value: nothing to restore.
        this.value = "";
      }
    });
  });
}

export function setupSeed(element) {
    let todayDate = new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  element.innerHTML = todayDate;

}

export function setupbtnGenerator(element) {
    element.addEventListener("click", () => {
      processValue();
    });
}

export function setupbtnAleatorio(element) {
    element.addEventListener("click", () => {
      showContent(getRandomNumber(6).toString())
    });
}

export function setupOnload() {
  window.onload = function () {
    setPrimarySeed();
    setSecondarySeed();
  }
}

