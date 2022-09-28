let teams = [
    'Mclaren',
    'Ferrari',
    'Porsche',
    'BMW',
    'Audi',
    'filler1',
    'filler2',
    'filler3',
    'filler4',
    'filler5',
    'filler6'
];

teams.forEach((team) =>{
    console.log(team);
})

alert("Aantal teams: " + teams.length);

for (let i = 0; i < teams.length; i++){
    if (teams[i] === "Ferrari"){
        teams.splice(i,1);
    }
}

console.log(teams)