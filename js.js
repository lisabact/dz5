 // Счётчик кликов с ограничением
 let clickCount = 0;
 const clickBtn = document.getElementById("clickBtn");
 const clickCounter = document.getElementById("clickCount");
 clickBtn.addEventListener("click", () => {
     clickCount++;
     clickCounter.textContent = `Кликов: ${clickCount}`;
     if (clickCount >= 15) {
         clickBtn.disabled = true;
         clickCounter.textContent += " (Достигнут лимит)";
     }
 });

 // Таймер с обратным отсчётом
 let countdown = 10;
 let countdownInterval = setInterval(() => {
     document.getElementById("timer").textContent = countdown;
     if (countdown === 0) {
         clearInterval(countdownInterval);
         document.getElementById("timer").textContent = "Время вышло!";
     } else {
         countdown--;
     }
 }, 1000);

 document.getElementById("resetTimer").addEventListener("click", () => {
     clearInterval(countdownInterval);
     countdown = 10;
     document.getElementById("timer").textContent = countdown;
     countdownInterval = setInterval(() => {
         document.getElementById("timer").textContent = countdown;
         if (countdown === 0) {
             clearInterval(countdownInterval);
             document.getElementById("timer").textContent = "Время вышло!";
         } else {
             countdown--;
         }
     }, 1000);
 });

 // Таймер с кнопками
 let time = 0;
 let timer;
 const counter = document.getElementById("counter");
 document.getElementById("start").addEventListener("click", () => {
     if (!timer) {
         timer = setInterval(() => {
             time++;
             counter.textContent = `${time} сек`;
         }, 1000);
     }
 });
 document.getElementById("stop").addEventListener("click", () => {
     clearInterval(timer);
     timer = null;
 });
 document.getElementById("reset").addEventListener("click", () => {
     clearInterval(timer);
     timer = null;
     time = 0;
     counter.textContent = "0 сек";
 });