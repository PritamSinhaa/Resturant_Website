    function addNumbers() {
      let a = parseFloat(document.getElementById("num1").value);
      let b = parseFloat(document.getElementById("num2").value);
      let sum = a + b;
      document.getElementById("result").textContent = "Sum: " + sum;
    }
