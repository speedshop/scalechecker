import '../css/styles.css';

// CARRIED TRAFFIC 

var arrivalRateEl = document.getElementById("arrivalrate");
var averageResponseEl = document.getElementById("avg-response-time");
var timeUnitPerSecEl = document.getElementById("timeunit");
var arrivalRate = 1;
var averageResponse = 1;
var timeUnitPerSec = 1; 
var carriedTraffic = 0; 

arrivalRateEl.addEventListener('input', updateArrivalRate);
averageResponseEl.addEventListener('input', updateAverageResponse);
timeUnitPerSecEl.addEventListener('change', updateTimeUnitPerSec);

function updateArrivalRate(e) {
  arrivalRate = e.target.value || e.target.placeholder;
  updateCarriedTraffic();
}

function updateTimeUnitPerSec(e) {
  timeUnitPerSec = e.target.value; 
  updateCarriedTraffic();
}

function updateAverageResponse(e) {
  averageResponse = e.target.value || e.target.placeholder;
  averageResponse = averageResponse / 1000;
  updateCarriedTraffic();
}

function updateCarriedTraffic() { 
  carriedTraffic = ((arrivalRate / timeUnitPerSec) * averageResponse).toFixed(2);
  document.getElementById("carried-calculated").innerText = carriedTraffic;
}

// OFFERED TRAFFIC 

var boxCountEl = document.getElementById("box_count");
var procsPerBoxEl = document.getElementById("procs_per_box");
var percentIOEl = document.getElementById("percent_io");
var threadsPerBoxEl = document.getElementById("threads_per_box");
var boxCount = 2;
var procsPerBox = 4;
var percentIO = 0.50;
var threadsPerBox = 1;
var vCPUperBox = 1;
var memPerBox = 2;
var offeredTraffic = 1;

boxCountEl.addEventListener('input', updateBoxCount);
procsPerBoxEl.addEventListener('input', updateProcsBerBox);
percentIOEl.addEventListener('input', updatePercentIO);
threadsPerBoxEl.addEventListener('input', updateThreadsPerBox);

function updateBoxCount(e) {
  boxCount = e.target.value || e.target.placeholder;
  updateOfferedTraffic();
}

function updateProcsBerBox(e) {
  procsPerBox = e.target.value || e.target.placeholder;
  updateOfferedTraffic();
}

function updateThreadsPerBox(e) {
  threadsPerBox = e.target.value || e.target.placeholder;
  updateOfferedTraffic();
}

function updatePercentIO(e) {
  percentIO = e.target.value || e.target.placeholder;
  percentIO = percentIO / 100;
  updateOfferedTraffic();
}

function updateOfferedTraffic() {
  var offeredPerProc = (1/((1-percentIO)+percentIO/threadsPerBox)) // Amdahl's Law
  offeredTraffic = (boxCount * procsPerBox * offeredPerProc).toFixed(2);
  document.getElementById("offered-calculated").innerText = offeredTraffic;
}

// WINDOW HOOKS 

if (window.readyState != 'loading'){
  arrivalRateEl.dispatchEvent(new Event('input'));
  averageResponseEl.dispatchEvent(new Event('input'));
  updateOfferedTraffic();
} else {
  window.addEventListener('DOMContentLoaded', fn);
}


