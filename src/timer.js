
const audio = new Audio();
audio.src = '/src/end_timer_beep.mp3';
//import audio from './src/end_timer_beep.mp3';
let setTime = '';
let seconds = '';
let minutes = '';
let hour = '';
let timer = '';

function pause() {
   //не успел. 
   //надо как-то сохранить переменную setTime с остаточными секундами и снова стартануть с этим значением
}

function start () {
   const timerInput = document.getElementById("time_input");
   const timerShow = document.getElementById("timer_div");
      setTime = 0;
      seconds = 0;
      minutes = 0;
      hour = 0;
      setTime = parseInt(timerInput.value) * 60;
   
      if (isNaN(setTime)) {
         audio.play();  
         return timerShow.innerHTML = ("Введите количество количества минут для отсчета!");
      }
      
         timer = setInterval(function () {
         seconds = setTime % 60;
         minutes = (setTime / 60) % 60;
         hour = (setTime / 60 / 60) % 60;

         if (setTime <= 0) {
            clearInterval(timer);
            timerShow.innerHTML = "Время закончилось";
            audio.play();
            return
            // let sound = new Howl({ // - не удалось импортировать
            //    src: ['sound.mp3']
            // });
            //sound.play();
         } else (setTime > 0)
         {let strTimer = `Осталось: ${Math.trunc(hour)} часов, ${Math.trunc(minutes)} минут, ${seconds} секунд`;
            timerShow.innerHTML = strTimer;
         }
      --setTime;
   }, 100); //ускорено намеренно, чтобы быстрее увидеть окончание 
   return timer
}

function reset() {
   clearInterval(timer);
   const timerShow = document.getElementById("timer_div");
   timerShow.innerHTML = 'Остановлено';
   audio.play(); 
}

//export {start, reset}