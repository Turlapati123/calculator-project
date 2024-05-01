document.addEventListener("DOMContentLoaded", function() {
  const display = document.getElementById("display");
  const clearButton = document.getElementById("clear");
  const calculateButton = document.getElementById("calculate");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");

  let currentInput = "";
  let shouldResetDisplay = false;

  function updateDisplay() {
    display.textContent = currentInput || "0";
  }

  updateDisplay();

  numberButtons.forEach(button => {
    button.addEventListener("click", function() {
      if (shouldResetDisplay) {
        currentInput = "";
        shouldResetDisplay = false;
      }
      currentInput += button.value;
      updateDisplay();
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener("click", function() {
      if (currentInput !== "" && !shouldResetDisplay) {
        currentInput += button.value;
        updateDisplay();
      }
    });
  });

  clearButton.addEventListener("click", function() {
    currentInput = "";
    shouldResetDisplay = false;
    updateDisplay();
  });

  calculateButton.addEventListener("click", function() {
    if (currentInput !== "" && !shouldResetDisplay) {
      currentInput = eval(currentInput).toString();
      shouldResetDisplay = true;
      updateDisplay();
    }
  });
});
