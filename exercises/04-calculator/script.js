const display = document.getElementById("display");
const history = document.getElementById("history");
const keys = document.querySelector(".calculator-keys");

let expression = "";

function updateDisplay(value) {
  display.value = value || "0";
}

function appendValue(value) {
  if (display.value === "Error") {
    expression = "";
  }

  expression += value;
  updateDisplay(expression);
}

function clearCalculator() {
  expression = "";
  history.textContent = "Ready";
  updateDisplay("0");
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
}

function safeEvaluate(input) {
  const sanitized = input
    .replaceAll("x", "*")
    .replaceAll("pi", "Math.PI")
    .replaceAll("e", "Math.E")
    .replaceAll("sqrt", "Math.sqrt")
    .replaceAll("sin", "Math.sin")
    .replaceAll("cos", "Math.cos")
    .replaceAll("tan", "Math.tan")
    .replaceAll("log", "Math.log10")
    .replaceAll("^", "**");

  if (!/^[0-9+\-*/().%\sMathPIEsqrtincotalg**]+$/.test(sanitized)) {
    throw new Error("Invalid expression");
  }

  return Function(`"use strict"; return (${sanitized})`)();
}

function calculate() {
  if (!expression) {
    return;
  }

  try {
    const result = safeEvaluate(expression);
    if (!Number.isFinite(result)) {
      throw new Error("Invalid result");
    }

    history.textContent = expression;
    expression = String(Number(result.toFixed(10)));
    updateDisplay(expression);
  } catch (error) {
    history.textContent = "Invalid calculation";
    expression = "";
    updateDisplay("Error");
  }
}

function applyAction(action) {
  if (action === "clear") {
    clearCalculator();
    return;
  }

  if (action === "delete") {
    deleteLast();
    return;
  }

  if (action === "equals") {
    calculate();
    return;
  }

  if (action === "percent") {
    appendValue("/100");
    return;
  }

  if (action === "sqrt") {
    appendValue("sqrt(");
    return;
  }

  if (action === "square") {
    appendValue("^2");
    return;
  }

  if (action === "power") {
    appendValue("^");
    return;
  }

  if (["sin", "cos", "tan", "log"].includes(action)) {
    appendValue(`${action}(`);
    return;
  }

  if (action === "pi") {
    appendValue("pi");
    return;
  }

  if (action === "e") {
    appendValue("e");
  }
}

keys.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const value = button.dataset.value;
  const action = button.dataset.action;

  if (value) {
    appendValue(value);
  }

  if (action) {
    applyAction(action);
  }
});

document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789+-*/().";

  if (allowedKeys.includes(event.key)) {
    appendValue(event.key);
  } else if (event.key === "Enter") {
    event.preventDefault();
    calculate();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearCalculator();
  }
});
