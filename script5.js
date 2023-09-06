/*5.Scrie un program care primește o valoare într-o monedă și o convertește într-o altă monedă, în funcție de un curs de schimb(funcția primește ca parametru valoarea, moneda din care se face schimbul, moneda în care se face schimbul). Monedele disponibile: EUR, USD, MDL, RON. Moneda de bază fiind EUR(cursul pentru alte monede se raportează la EUR).
Ex.: 
1USD = 0.9EUR
1MDL = 0.05EUR
1RON = 0.2EUR

Schimbă 10RON în USD:
Mai întâi 10RON se schimbă în EUR, apoi EUR în USD.
10 * 0.2 / 0.9 = 2.22USD*/
function convertCurrency(valoare, monedaSursa, monedaSchimb) {
    const cursuriSchimb = {
        EUR: 1,
        USD: 0.9,
        MDL: 0.05,
        RON: 0.2
    };

    if (!(monedaSursa in cursuriSchimb) || !(monedaSchimb in cursuriSchimb)) {
        return "Monede invalide!";
    }

    const valoareInEUR = valoare / cursuriSchimb[monedaSursa];
    const valoareInMonedaSchimb = valoareInEUR * cursuriSchimb[monedaSchimb];

    return `${valoare} ${monedaSursa} = ${valoareInMonedaSchimb.toFixed(2)} ${monedaSchimb}`;
}

const valoareDeConvertit = 10;
const monedaSursa = "RON";
const monedaSchimb = "USD";

const rezultatConversie = convertCurrency(valoareDeConvertit, monedaSursa, monedaSchimb);
console.log(rezultatConversie); 

