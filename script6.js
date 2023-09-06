//6.Scrie o funcție care primește lungimile laturilor unui dreptunghi și verifică dacă acesta este pătrat sau nu. Returnează un mesaj corespunzător în fiecare caz.

function verificaDreptunghiul (latura1, latura2) {
    if (latura1 === latura2){
        return ("Acesta este un patrat");
    } else {
        return ("Acesta nu este un patrat");
    }
}
var lungime1 = 20;
var lungime2 = 20;

const result = verificaDreptunghiul (lungime1, lungime2);
console.log(result);
