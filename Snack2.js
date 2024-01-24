const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48
    },
    {
        id: 145,
        name: "Gaia Borromini",
        grades: 74
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84
    }
];

console.log("Un array di stringhe contenente il loro nome tutto in maiuscolo");
students.forEach((elemento , index , array) => elemento.name = elemento.name.toUpperCase());
console.table(students);

console.log('Un array di oggetti "studente" che hanno un totale di voti superiore a 70');
/*
let media70 = students.filter((student) => {
    student = student.grades > 70;
    return student;   
});*/
let media70 = students.filter(student => student.grades > 70);

console.table(media70);



console.log('Un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore 120');
/*
let mediaTra70e120 = students.filter((student) => {
    student = student.grades > 70 && student.id > 120;

    return student;   
});*/
let mediaTra70e120 = students.filter(student => student.grades > 70 && student.id > 120);

console.table(mediaTra70e120);