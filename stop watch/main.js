/* initialization of different variables 
to be used in Count-Up App*/
var clearTime;
var seconds = 0,
  minutes = 0,
  hours = 0;
var secs, mins, gethours;

function startWatch() {
  /* check if seconds is equal to 60 and add a +1 
    to minutes, and set seconds to 0 */
  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  /* i used the javascript tenary operator to format 
    how the minutes should look and add 0 to minutes if 
    less than 10 */
  mins = minutes < 10 ? "0" + minutes + ": " : minutes + ": ";
  /* check if minutes is equal to 60 and add a +1 
    to hours set minutes to 0 */
  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }
  /* i used the javascript tenary operator to format 
    how the hours should look and add 0 to hours if less than 10 */
  gethours = hours < 10 ? "0" + hours + ": " : hours + ": ";
  secs = seconds < 10 ? "0" + seconds : seconds;

  var continueButton = document.getElementById("continue");
  continueButton.removeAttribute("hidden");

  /* display the Count-Up Timer */
  var x = document.getElementById("timer");
  x.innerHTML = gethours + mins + secs;

  /* call the seconds counter after displaying the Count-Up 
    and increment seconds by +1 to keep it counting */
  seconds++;

  /* call the setTimeout( ) to keep the Count-Up alive ! */
  clearTime = setTimeout("startWatch( )", 1000);
}
//create a function to start the Count-Up
function startTime() {
  /* check if seconds, minutes, and hours are equal to zero 
    and start the Count-Up */
  if (seconds === 0 && minutes === 0 && hours === 0) {
    /* hide the fulltime when the Count-Up is running */
    var fulltime = document.getElementById("fulltime");
    fulltime.style.display = "none";
    var showStart = document.getElementById("start");
    showStart.style.display = "none";

    /* call the startWatch( ) function to execute the Count-Up 
        whenever the startTime( ) is triggered */
    startWatch();
  }
}
var start = document.getElementById("start");
start.addEventListener("click", startTime);

/*create a function to stop the time */
function stopTime() {
  /* check if seconds, minutes and hours are not equal to 0 */
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    var continueButton = document.getElementById("continue");
    continueButton.setAttribute("hidden", "true");
    var fulltime = document.getElementById("fulltime");
    fulltime.style.display = "block";
    fulltime.style.color = "#ff4500";
    var time = gethours + mins + secs;
    fulltime.innerHTML = "Time Recorded is " + time;
    // reset the Count-Up
    seconds = 0;
    minutes = 0;
    hours = 0;
    secs = "0" + seconds;
    mins = "0" + minutes + ": ";
    gethours = "0" + hours + ": ";

    /* display the Count-Up Timer after it's been stopped */
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    var showStart = document.getElementById("start");
    showStart.style.display = "inline-block";
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    var showPause = document.getElementById("pause");
    showPause.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}
window.addEventListener("load", function() {
  var stop = document.getElementById("stop");
  stop.addEventListener("click", stopTime);
});
/*********** End of Stop Button Operations *********/

/*********** Pause Button Operations *********/
function pauseTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    /* display the Count-Up Timer after clicking on pause button */
    var x = document.getElementById("timer");
    var stopTime = gethours + mins + secs;
    x.innerHTML = stopTime;

    /* display all Count-Up control buttons */
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";

    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID */
    clearTimeout(clearTime);
  }
}

var pause = document.getElementById("pause");
pause.addEventListener("click", pauseTime);
/*********** End of Pause Button Operations *********/

/*********** Continue Button Operations *********/
function continueTime() {
  if (seconds !== 0 || minutes !== 0 || hours !== 0) {
    /* display the Count-Up Timer after it's been paused */
    var x = document.getElementById("timer");
    var continueTime = gethours + mins + secs;
    x.innerHTML = continueTime;

    /* display all Count-Up control buttons */
    var showStop = document.getElementById("stop");
    showStop.style.display = "inline-block";
    /* clear the Count-Up using the setTimeout( ) 
        return value 'clearTime' as ID.
        call the setTimeout( ) to keep the Count-Up alive ! */
    clearTimeout(clearTime);
    clearTime = setTimeout("startWatch( )", 1000);
  }
}

window.addEventListener("load", function() {
  var cTime = document.getElementById("continue");
  cTime.addEventListener("click", continueTime);
});
/*********** End of Continue Button Operations *********/


var span = document.querySelector("span");

span.addEventListener("input", function() {
	var text = this.innerText;
	this.setAttribute("data-heading", text);
	this.parentElement.setAttribute("data-heading", text);
});