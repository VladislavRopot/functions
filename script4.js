//4.Scrie o funcție care primește un număr și două limite și verifică dacă numărul se află între aceste limite. Returnează un mesaj corespunzător în fiecare caz.

function verificaLimita(numar, limitaInferioara, limitaSuperioara) {
    if (numar >= limitaInferioara && numar <= limitaSuperioara) {
      return ("Numarul dvs. se afla intre limite");
    } else if (numar < limitaInferioara) {
      return ("Numarul dvs. este mai mic decat limita inferioara");
    } else {
      return ("Numarul dvs. este mai mare decat limita superioara");
    }
  }
  
  var numar = 10;
  var limitaInferioara = 1;
  var limitaSuperioara = 20;
  var result = verificaLimita(numar, limitaInferioara, limitaSuperioara);
  console.log(result);