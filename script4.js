//4.Scrie o funcție care primește un număr și două limite și verifică dacă numărul se află între aceste limite. Returnează un mesaj corespunzător în fiecare caz.

function verifyLimit(number, inferiorLimit, upperLimit) {
    if (number >= inferiorLimit && number <= upperLimit) {
      return ("Numarul dvs. se afla intre limite");
    } else if (number < inferiorLimit) {
      return ("Numarul dvs. este mai mic decat limita inferioara");
    } else {
      return ("Numarul dvs. este mai mare decat limita superioara");
    }
  }
  
  let number = 10;
  let inferiorLimit = 1;
  let upperLimit = 20;
  let result = verifyLimit(number, inferiorLimit, upperLimit);
  console.log(result);