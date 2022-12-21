export const showHideTimeCalc = document.getElementById('showHideTimeCalc')
export const showHideDateCalc = document.getElementById('showHideDateCalc')

const timeCalcBox = document.getElementById('time_calc')
const dateCalcBox = document.getElementById('date_calc')

showHideTimeCalc.onclick = () => {
   if (timeCalcBox.classList.contains('hidden') && dateCalcBox.classList.contains('hidden')) {
         timeCalcBox.classList.remove('hidden')
         timeCalcBox.classList.add('show')
      }  else if (timeCalcBox.classList.contains('hidden') &&  dateCalcBox.classList.contains('show')) {
         timeCalcBox.classList.remove('hidden')
         timeCalcBox.classList.add('show')
         dateCalcBox.classList.remove('show')
         dateCalcBox.classList.add('hidden')
      }  else if (timeCalcBox.classList.contains('show') &&  dateCalcBox.classList.contains('hidden')) {
         timeCalcBox.classList.remove('show')
         timeCalcBox.classList.add('hidden')
      }  else  if (timeCalcBox.classList.contains('show') &&  dateCalcBox.classList.contains('show')) {
         timeCalcBox.classList.remove('show')
         timeCalcBox.classList.add('hidden')
         dateCalcBox.classList.remove('show')
         dateCalcBox.classList.add('hidden')
      }      
}

showHideDateCalc.onclick = () => {
   if (dateCalcBox.classList.contains('hidden') && timeCalcBox.classList.contains('hidden')) {
      dateCalcBox.classList.remove('hidden')
      dateCalcBox.classList.add('show')
   } else if (dateCalcBox.classList.contains('hidden') &&  timeCalcBox.classList.contains('show')) {
      dateCalcBox.classList.remove('hidden')
      dateCalcBox.classList.add('show')
      timeCalcBox.classList.remove('show')
      timeCalcBox.classList.add('hidden')
   } else if (dateCalcBox.classList.contains('show') &&  timeCalcBox.classList.contains('hidden')) {
      dateCalcBox.classList.remove('show')
      dateCalcBox.classList.add('hidden')
   } else if (dateCalcBox.classList.contains('show') &&  timeCalcBox.classList.contains('show')) {
      dateCalcBox.classList.remove('show')
      dateCalcBox.classList.add('hidden')
      timeCalcBox.classList.remove('show')
      timeCalcBox.classList.add('hidden')
   } 
}

