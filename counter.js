function startCounter() {
  let count = 0;
  const countElement = document.getElementById("counter");
  function updateCount() {
    countElement.innerHTML = `Time passed: ${count} seconds`;
    count++;
  }
  const countInterval = setInterval(updateCount, 1000);
  sessionStorage.setItem("countInterval", countInterval);
  updateCount();
}

const existingCountInt = sessionStorage.getItem("countInterval");
if (existingCountInt) {
  const countInterval = parseInt(existingCountInt);
  clearInterval(countInterval);
  startCounter();
} else {
  startCounter();
}

function resetCounter() {
  const countElement = document.getElementById("counter");
  countElement.innerHTML = "Time Passed: 0 seconds";
  clearInterval(sessionStorage.getItem("countInterval"));
  sessionStorage.removeItem("countInterval");
  startCounter();
}
