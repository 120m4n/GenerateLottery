import './style.css'
import { setupbtnAleatorio, setupbtnGenerator, setInputFilter, setupOnload } from './seed.js'

const app = document.querySelector('#app');

if (app) {

app.innerHTML = `
      <h1 >
          <span class="gradient-text">'El GORDO'</span>
          <span>de la loteria</span>
      </h1>

      <form id="generatorKey">
          <b>Generar Desde:</b>
          <input type="tel" 
                  id="seed"
                  maxlength="20"  />
          <button class="myButton" type="button" id="btnGenerar">Generar</button>
      </form>
      <div id="container"></div>

      <button class="myButton" id="btnAleatorio">Numero Aleatorio</button>
      <template id="template">
          <div class="card">
              <!-- close button -->
              <div class="close" id="btnClose" onclick="closeCard(this)"></div>
              <h2>Semilla: <span class="seed"></span></h2>
              <h3>Numero: <span class="lotteryNumber"></span></h3>
              <div class="parent">
                  <div class="divTop"></div>
                  <div class="divLeft"></div>
                  <div class="divRight"></div>
                  <div class="divBottom"></div>
              </div>
          </div>
      </template>
  `
}

//setupSeed(document.querySelector('#todayDate'))
setupbtnGenerator(document.querySelector('#btnGenerar'))
setupbtnAleatorio(document.querySelector('#btnAleatorio'))
setInputFilter(document.querySelector('#seed'), function(value) {
    return /^\d*$/.test(value);
}, "La semilla debe ser un numero entero positivo");
  
setupOnload();
