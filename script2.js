//2.Scrie o funcție care primește trei numere și returnează valoarea minimă dintre ele.
function minDintreTrei(num1, num2, num3) {
    return Math.min(num1, num2, num3);
  }
 
  var numarMinim = minDintreTrei(10, 5, 8);
  console.log("Numărul minim este: " + numarMinim);