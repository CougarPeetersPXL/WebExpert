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

fietsen.forEach(fiets => {
    if (fiets.prijs < 2500){
        console.log(fiets);
    }
})
