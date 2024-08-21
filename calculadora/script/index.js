function appendToDisplay(value) {
  let display = document.getElementById("display");
  if (display.innerText === "0" && value !== "/") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function calculateResult() {
  let display = document.getElementById("display");
  try {
    // Avaliar a expressão e atualizar o display
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = "Error";
  }
}
