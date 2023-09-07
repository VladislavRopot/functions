//2.Scrie o funcție care primește trei numere și returnează valoarea minimă dintre ele.
function findMinNumber(num1, num2, num3) {
    let minNumber = num1;

    if (num2 < minNumber) {
        minNumber = num2;
    }

    if (num3 < minNumber) {
        minNumber = num3;
    }

    return minNumber;
  }
 
  let minNumber = findMinNumber(10, 5, 8);
  console.log("Numărul minim este: " + minNumber);