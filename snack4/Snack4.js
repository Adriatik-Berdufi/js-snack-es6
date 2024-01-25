/*
SNACK 4
Usa l'array allegato alla traccia per completare i seguenti punti:
Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

 */

const teams = [
    {
      name: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
  ];

console.log('team.score');
teams.forEach((team) => {
  team.score = Math.floor(Math.random()* 21);
  team.foul = Math.floor(Math.random()* 10);
  console.log(team.score);
  return team;
});
console.table(teams);

const newTable = [];
teams.forEach((team) => {
  const newteam ={ name: team.name, foul: team.foul };
  return newTable.push(newteam );
});
console.table(newTable);