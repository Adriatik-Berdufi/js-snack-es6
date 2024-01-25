/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
const bici = [
    { nome: "Bianchi Oltre XR4", peso: 7.2 },
    { nome: "Trek Madone", peso: 7.4 },
    { nome: "Cannondale SuperSix EVO", peso: 7.0 },
    { nome: "Specialized Tarmac", peso: 7.3 },
    { nome: "Pinarello Dogma F12", peso: 7.1 },
    { nome: "Scott Addict RC", peso: 6.8 },
    { nome: "Colnago C64", peso: 7.5 },
    { nome: "Giant Propel Advanced", peso: 7.6 },
    { nome: "Merida Reacto", peso: 7.2 },
    { nome: "Orbea Orca", peso: 7.3 },
    { nome: "Wilier Cento10 NDR", peso: 7.4 },
    { nome: "Ridley Noah Fast", peso: 7.1 },
    { nome: "Fuji Transonic", peso: 7.5 },
    { nome: "Look 795 Blade RS", peso: 7.0 },
    { nome: "De Rosa SK Pininfarina", peso: 7.6 }

  ];

 // var per salvare quella con peso minore
 let laPiuLeggera = bici[0];

 bici.forEach((bici) => {
  if(bici.peso < laPiuLeggera.peso){
    laPiuLeggera = bici;
  };
 });
 
 console.log(`La bici pi leggera e : ${laPiuLeggera.nome}\ncon un peso di: ${laPiuLeggera.peso}kg`);
 console.log(laPiuLeggera);

