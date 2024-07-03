function calculate() {
    let display = document.getElementById("display");
    let expression = display.value.replace(/x/g, "*");
    try {
        let result = eval(expression);
        display.value = (result % 1 === 0) ? result : result.toFixed(3);
    } catch (e) {
      display.value = "Error";
    }
  }
    