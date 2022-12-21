import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { showHideTimeCalc, showHideDateCalc } from "./showHide.js";
//import { buttonRun }  from "./timer.js";
//import { Howl, Howler } from "./howler.js";
// import { Howl, Howler } from 'howler';

// const { diffDates, diffToHtml } = require("./datecalc");
// const { formatError } = require ("./utils.js");
// const { showHideTimeCalc, showHideDateCalc } = require ("./showHide.js");


const dateCalcForm = document.getElementById("datecalc"); 
const dateCalcResult = document.getElementById("datecalc__result"); 

dateCalcForm.addEventListener("submit", handleCalcDates); 

function handleCalcDates(event) { 
    dateCalcResult.innerHTML = ""; 
    event.preventDefault(); 

    let { firstDate, secondDate } = event.target.elements; 
    firstDate = firstDate.value, secondDate = secondDate.value; 

    if (firstDate && secondDate) { 
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля с датами");
}



