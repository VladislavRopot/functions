//6.Scrie o funcție care primește lungimile laturilor unui dreptunghi și verifică dacă acesta este pătrat sau nu. Returnează un mesaj corespunzător în fiecare caz.

function checkRectangle (a, b, c, d) {
    if (a === b && b == c && c == d){
        return ("Acesta este un patrat");
    } else {
        return ("Acesta nu este un patrat");
    }
}
let a = 20;
let b = 20;
let c = 20;
let d = 20;

const result = checkRectangle (a, b, c, d);
console.log(result);
