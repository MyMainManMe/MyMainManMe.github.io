let lang = 0;

function whatDayIsit() {
  const elem = document.getElementById("answer");
  const title = document.getElementById("title");
  let d = new Date();
  let dateNum = d.getDay();
  if (lang === 0){
    title.innerHTML = "<a href="https://stregsystem.fklub.dk/">Hvilken dag er det?</a>";
    switch (dateNum){
      case 0:
        elem.innerHTML = "Søndag";
        elem.className = "Weekend";
        document.title = "Søndag";
        break;
      case 1:
        elem.innerHTML = "Mandag";
        elem.className = "Monday";
        document.title = "Mandag";
        break;
      case 2:
        elem.innerHTML = "Tirsdag";
        elem.className = "Tuesday";
        document.title = "Tirsdag";
        break;
      case 3:
        elem.innerHTML = "Det er onsdag mine gutter";
        elem.className = "Wednesday";
        document.getElementById("wednesdayFrog").style.visibility = 'visible';
        document.title = "Onsdag";
        break;
      case 4:
        elem.innerHTML = "Torsdag";
        elem.className = "Thursday";
        document.title = "Torsdag";
        break;
      case 5:
        elem.innerHTML = "Sygt, det er fredag";
        elem.className = "Friday";
        document.getElementById("fridayFrog").style.visibility = 'visible';
        document.title = "Fredag";
        break;
      case 6:
        elem.innerHTML = "Lørdag";
        elem.className = "Weekend";
        document.title = "Lørdag";
        break;
      default:
        elem.innerHTML = "How?";
    }
  }
  if (lang === 1){
    title.innerHTML = "<a href="https://stregsystem.fklub.dk/">What day is it?</a>";
    switch (dateNum){
      case 0:
        elem.innerHTML = "Sunday";
        elem.className = "Weekend";
        document.title = "Søndag";
        break;
      case 1:
        elem.innerHTML = "Monday";
        elem.className = "Monday";
        document.title = "Mandag";
        break;
      case 2:
        elem.innerHTML = "Tuesday";
        elem.className = "Tuesday";
        document.title = "Tirsdag";
        break;
      case 3:
        elem.innerHTML = "It is Wednesday my dudes";
        elem.className = "Wednesday";
        document.getElementById("wednesdayFrog").style.visibility = 'visible';
        document.title = "Onsdag";
        break;
      case 4:
        elem.innerHTML = "Thursday";
        elem.className = "Thursday";
        document.title = "Torsdag";
        break;
      case 5:
        elem.innerHTML = "Wild, it's friday";
        elem.className = "Friday";
        document.getElementById("fridayFrog").style.visibility = 'visible';
        document.title = "Fredag";
        break;
      case 6:
        elem.innerHTML = "Saturday";
        elem.className = "Weekend";
        document.title = "Lørdag";
        break;
      default:
        elem.innerHTML = "How?";
    }
  }
}


function secondsUntilFriday() {
  const today = new Date();
  const currentDay = today.getDay();
  const friday = 5; 

  if (currentDay < friday) {
    const secondsUntilFriday = (friday - currentDay) * 24 * 60 * 60;
    const currentSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
    return secondsUntilFriday - currentSeconds;
  } else if(currentDay  > friday){
    const secondsUntilNextFriday = (7 - currentDay + friday) * 24 * 60 * 60;
    const currentSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
    return secondsUntilNextFriday - currentSeconds;
  } else {
    return 0;
  }
}
  
function displayCountdown() {
  const timeTitle = document.getElementById("timeTitle");
  const totalTimeTitle = document.getElementById("totalTimeTitle");
  const countdownSec = document.getElementById('countDownSecond');
  const countdownMin = document.getElementById('countDownMinute');
  const countdownHour = document.getElementById('countDownHour');
  const totalCountdownSec = document.getElementById('totalCountDownSecond');
  const totalCountdownMin = document.getElementById('totalCountDownMinute');
  const totalCountdownHour = document.getElementById('totalCountDownHour');  
  let remainingSeconds = secondsUntilFriday();
  let remainingMinutes = Math.floor(secondsUntilFriday() / 60);
  let remaningHours = Math.floor(secondsUntilFriday() / 3600);

  let remainingSecondsCalculated = remainingSeconds;
  let remainingHoursCalculated = Math.floor(remainingSecondsCalculated / 3600);
  remainingSecondsCalculated %= 3600;  // Remaining seconds after removing full hours
  let remainingMinutesCalculated = Math.floor(remainingSecondsCalculated / 60);
  remainingSecondsCalculated %= 60;  // Remaining seconds after removing full minutes

  if (lang === 0 && remainingSeconds > 0){
    countdownSec.textContent = `Sekunder til fredag: ${remainingSecondsCalculated}`;
    countdownMin.textContent = `Minutter til fredag: ${remainingMinutesCalculated}`;
    countdownHour.textContent = `Timer til fredag: ${remainingHoursCalculated}`;
    totalCountdownSec.textContent = `Total sekunder: ${remainingSeconds}`;
    totalCountdownMin.textContent = `Total minutter: ${remainingMinutes}`;
    totalCountdownHour.textContent = `Total timer: ${remaningHours}`;
    timeTitle.innerHTML = "Tid til fredag:";
    totalTimeTitle.innerHTML = "Tid til fredag (Opdelt):";
  }

  if (lang === 1 && remainingSeconds > 0){
    countdownSec.textContent = `Seconds till friday: ${remainingSecondsCalculated}`;
    countdownMin.textContent = `Minutes till friday: ${remainingMinutesCalculated}`;
    countdownHour.textContent = `Hours till friday: ${remainingHoursCalculated}`;
    totalCountdownSec.textContent = `Total seconds: ${remainingSeconds}`;
    totalCountdownMin.textContent = `Total minutes: ${remainingMinutes}`;
    totalCountdownHour.textContent = `Total hours: ${remaningHours}`;
    timeTitle.innerHTML = "Time till friday:";
    totalTimeTitle.innerHTML = "Time till friday (Segregated):";
  }
}

function startIntervals(){
  setInterval(createBeer, 60000);
  setInterval(displayCountdown, 1000);
}

function setLangToDanish(){
  lang = 0;
  whatDayIsit();
}

function setLangToEnglish(){
  lang = 1;
  whatDayIsit();
}

function createBeer() {
  const beer = document.createElement("div");
  beer.classList.add("beerfall");
  beer.style.left = `${Math.random() * window.innerWidth}px`;
  beer.style.top = 0;
  document.body.appendChild(beer);
  beer.addEventListener("animationiteration", () => {
      document.body.removeChild(beer);
  });
}


function switchMode(){
  const switchMode = document.getElementById("switchMode");
  const body = document.body;
  const h1 = document.querySelector("h1");
  const flashingText = document.getElementById("flashingText")

  if (switchMode.textContent == "Light Mode"){
    switchMode.textContent = "Dark Mode";
    body.style.background = "white";
    h1.style.color = "black";
    flashingText.classList.remove('flashingTextDark');
    flashingText.classList.add('flashingTextLight');
  } 
  else if (switchMode.textContent == "Dark Mode"){  
    switchMode.textContent = "Light Mode";
    body.style.background = "black";
    h1.style.color = "#ccc";
    flashingText.classList.remove('flashingTextLight');
    flashingText.classList.add('flashingTextDark');
  }
}

const hiddenImage = document.getElementById("stareImg");
const audio = document.getElementById("audio");
const stareText = document.getElementById("stareText");

hiddenImage.addEventListener("mouseenter", () => {
  audio.play();
});

hiddenImage.addEventListener("mouseleave", () => {
  audio.pause();
});


document.addEventListener('DOMContentLoaded', startIntervals);
document.addEventListener('DOMContentLoaded', whatDayIsit);
