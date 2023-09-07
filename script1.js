//1.Scrie o funcție care primește trei numere și returnează valoarea maximă dintre ele.
function findMaxNumber(num1, num2, num3) {
    let maxNumber = num1;
  
    if (num2 > maxNumber) {
      maxNumber = num2;
    }
  
    if (num3 > maxNumber) {
      maxNumber = num3;
    }
  
    return maxNumber;
  }
  
  let maxNumber = findMaxNumber(10, 5, 8);
  console.log("Numărul maxim este: " + maxNumber);
  