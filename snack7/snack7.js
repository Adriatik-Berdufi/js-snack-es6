let cars = [
    {
        color: "purple",
        type: "minivan",
        capacity: 7
    },
    {
        color: "red",
        type: "station wagon",
        capacity: 5
    },
    {
        color: "black",
        type: 'spider',
        capacity : 2
    },
    {
        color: "grey",
        type: 'pullman',
        capacity : 15
    }

];

let people = parseInt(prompt("in quanti viaggiate?"));

let usabiliCars = cars.filter(({capacity})=>capacity >= people);
console.table(usabiliCars[0]);
