//3.Scrie o funcție care primește vârsta unui utilizator și returnează un mesaj care indică dacă este potrivită pentru a juca un anumit joc. De exemplu, dacă vârsta este mai mare sau egală cu 18, mesajul poate fi "Ești potrivit pentru a juca acest joc", altfel, mesajul poate fi "Ești prea tânăr pentru a juca acest joc".

function verifyAge(age) {
    if (age >= 18) {
      return "Ești potrivit pentru a juca acest joc";
    } else {
      return "Ești prea tânăr pentru a juca acest joc";
    }
  }
  
  let ageUser = 12;
  let result = verifyAge(ageUser);
  console.log(result);