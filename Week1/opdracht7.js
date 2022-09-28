let hoofding = document.createElement("h2");
let hoofdingTekst = document.createTextNode("Populaire elektrische fietsen");

hoofding.appendChild(hoofdingTekst);
const maindiv = document.getElementById("main");
maindiv.appendChild(hoofding);

let button = document.createElement("button");
let buttonTekst = document.createTextNode("Gemiddelde prijs");
button.id = "gemiddelde"

button.appendChild(buttonTekst);
maindiv.appendChild(button);

let button2 = document.createElement("button");
let button2Tekst = document.createTextNode("Top 3");
button2.id = "top3"

button2.appendChild(button2Tekst);
maindiv.appendChild(button2);

let div = document.createElement("div");
div.id = "content";

maindiv.appendChild(div);


let fietsen = [
    {
        merk: "Kalkhof",
        type: "Endeavour 3.B Move",
        score: "8.7",
        prijs: 2699
    },
    {
        merk: "Cube",
        type: "Touring Hybrid One 500",
        score: "8.5",
        prijs: 2249
    },
    {
        merk: "Victoria",
        type: "E-Trekking 6.5 Wave",
        score: "8.3",
        prijs: 2599
    },
    {
        merk: "Vyver",
        type: "Ride E1 Special Edition",
        score: "8.1",
        prijs: 1999
    },
    {
        merk: "Pegasus",
        type: "Siena E7F Plus",
        score: "8.1",
        prijs: 2399
    }
];

let ul = document.createElement("ul");
fietsen.forEach((fiets) =>{
    let li = document.createElement("li");
    li.innerText = `${fiets.merk} - ${fiets.type}`;
    if (fiets.score > 8){
        li.style.color = "green";
        li.style.fontWeight = "bold";
    }
    ul.appendChild(li);
});
maindiv.appendChild(ul);

document.getElementById("gemiddelde").addEventListener("click", gemiddeldePrijs());

function gemiddeldePrijs(){
    let totaal = 0
    let lengte  = fietsen.length;

    fietsen.forEach(fiets =>{
        totaal += fiets.prijs;
    })
    let gemiddelde = totaal / lengte;
    let p = document.createElement("p");
    p.innerText = "De gemiddelde prijs van de fietsen bedraagt €" + Math.round(gemiddelde);
    maindiv.appendChild(p);
}

document.getElementById("top3").addEventListener("click", toonTop3());

function toonTop3(){
    let ol = document.createElement("ol");
    fietsen.sort((a,b) => a.prijs - b.prijs);
}
