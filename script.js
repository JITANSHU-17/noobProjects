// Scientific Calculator functionality
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
  function calculateResult() {
    let displayValue = document.getElementById("display").value;
    try {
      document.getElementById("display").value = eval(displayValue);
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  
  // Unit Converter functionality
  function convert1() {
    let meters = document.getElementById("meters").value;
    let feet = meters * 3.28084; // Conversion factor
    document.getElementById("result1").innerText = `Result: ${feet.toFixed(2)} feet`;
  }
  function convert2() {
    let feet = document.getElementById("feet").value;
    let meters = feet / 3.28084; // Conversion factor
    document.getElementById("result2").innerText = `Result: ${meters.toFixed(2)} meters`;
  }
  function convert3() {
    let kg = document.getElementById("kg").value;
    let pounds = kg*2.20462; // Conversion factor
    document.getElementById("result3").innerText = `Result: ${pounds.toFixed(2)} pounds`;
  }

  function convert5() {
    let celcius = document.getElementById("celcius").value;
    let fahrenheit = (celcius*9/5)+32; // Conversion factor
    document.getElementById("result5").innerText = `Result: ${fahrenheit.toFixed(2)} fahrenheit`;
  }
  function convert6() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celcius = (fahrenheit-32)*(5/9); // Conversion factor
    document.getElementById("result6").innerText = `Result: ${celcius.toFixed(2)} degree`;
  }
  
  // Contact form functionality
  /*
  document.getElementById("supportForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent to support team!");
  });
  */
  