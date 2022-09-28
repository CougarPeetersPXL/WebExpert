let bikePrices = [
    5329,
    4999,
    2499,
    1999,
    3750,
    6415
];
let average = averagePrice(bikePrices)
console.log(`De gemiddelde prijs voor een fiets bedraagt ${average} euro.`);

function averagePrice(prices){
let totaal = 0;
prices.forEach(price =>{
    totaal = totaal + price
    });

return totaal / prices.length;
}
