//7.Scrie o funcție care primește ca parametru un număr de la 1 la 7(numărul zilei săptămânii) și returnează numele zilei respective.
function dayOfTheWeek(numberDay) {
    switch (numberDay){
        case 1:
            return "luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        case 7:
            return "Duminica";
        default:
            return "Nu exista alta zi din saptamana.";
    }  
}

const numberDayOfTheWeek = 5;
const numberDay = dayOfTheWeek(numberDayOfTheWeek);
console.log("Ziua corespunzatoare numarului " + numberDayOfTheWeek + " este " + numberDay);
