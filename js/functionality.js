const html = document.getElementById("htmlPage");
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  if(checkbox.checked){
    html.setAttribute("data-bs-theme", "dark");
  }else{
    html.setAttribute("data-bs-theme", "light");
  }
});


/**DARK MODE TOGGLE ABOVE*/


let clickCount = 0;
let countdownStarted = false;
let intervalId = null;
let selectedTime = 0;
let initialSelectedTime = 0;

const buttonClick = document.querySelector("#clickButton");
const timer1 = document.querySelector("#t1");
const timer2 = document.querySelector("#t2");
const timer3 = document.querySelector("#t3");
const timerSet = document.querySelector("#timer");
const clickDisplay = document.querySelector("#cps");

function incrementButton() {
  clickCount++;
  clickDisplay.textContent = clickCount;

  // Start countdown if not started yet
  if (!countdownStarted && selectedTime > 0) {
    countdownStarted = true;
    intervalId = setInterval(function () {
      if (selectedTime > 0) {
        selectedTime--;
        timerSet.innerHTML = selectedTime;
      } else {
        clearInterval(intervalId);
        countdownStarted = false;
        timerSet.innerHTML = "0";

        // Display the result messages based on initialSelectedTime
        if (initialSelectedTime === 10) {
          if (clickCount >= 25 && clickCount <= 50) {
            document.getElementById("timer").innerHTML = "You're as slow as a 3-legged dog!";
          } else if (clickCount >= 51 && clickCount <= 75) {
            document.getElementById("timer").innerHTML = "You're good, but don't get ahead of yourself!";
          } else if (clickCount >= 76 && clickCount <=90) {
            document.getElementById("timer").innerHTML = "Touch some grass!";
          } else {
            document.getElementById("timer").innerHTML = "You might be slow as a turtle, or fast as a cheetah.";
          }
        } else if (initialSelectedTime === 20) {
          if (clickCount >= 50 && clickCount <= 70) {
            document.getElementById("timer").innerHTML = "I think you can do better.";
          } else if (clickCount >= 71 && clickCount <= 80) {
            document.getElementById("timer").innerHTML = "You have some terminator fingers!";
          } else if (clickCount >= 81 && clickCount <=100) {
            document.getElementById("timer").innerHTML = "Get A life!";
          } else {
            document.getElementById("timer").innerHTML = "You might be slow as a turtle, or fast as a cheetah.";
          }
        } else if (initialSelectedTime === 30) {
          if (clickCount >= 75 && clickCount <= 100) {
            document.getElementById("timer").innerHTML = "We both know that you can do better!";
          } else if (clickCount >= 101 && clickCount <= 120) {
            document.getElementById("timer").innerHTML = "Nicely done, but could be better!";
          } else if (clickCount >= 150 && clickCount <=180) {
            document.getElementById("timer").innerHTML = "Take A Bath Man!";
          } else {
            document.getElementById("timer").innerHTML = "You might be slow as a turtle, or fast as a cheetah.";
          }
        }

        // Show the reset link
        document.getElementById("link").style.display = "block";

        // Reset click count and timer
        clickCount = 0;
        document.getElementById("cps").textContent = clickCount;
      }
    }, 1000);
  }
}

// Event listeners for timers
timer1.addEventListener("click", function() {
  resetGame(10);
});

timer2.addEventListener("click", function() {
  resetGame(20);
});

timer3.addEventListener("click", function() {
  resetGame(30);
});

// Reset game function
function resetGame(time) {
  clickCount = 0;
  countdownStarted = false;
  if (intervalId) clearInterval(intervalId);
  clickDisplay.textContent = 0;
  selectedTime = time;
  initialSelectedTime = time; // Store the initial time for message logic
  timerSet.textContent = selectedTime;
  document.getElementById("link").style.display = "none";
}

// Reset game on link click
document.getElementById("link").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior of the link

  // Reset game variables
  clickCount = 0;
  countdownStarted = false;

  if (intervalId) clearInterval(intervalId);  // Clear any active timers

  document.getElementById("cps").textContent = clickCount;
  timerSet.textContent = "??";  // Reset the timer display to the default
  document.getElementById("link").style.display = "none"; // Hide the link again
});










