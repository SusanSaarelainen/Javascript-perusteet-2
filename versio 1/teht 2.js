var input = require("readline-sync"); //(view -> terminal -> npm i readline-sync)
let henkilot = [
  { nimi: "Aku Ankka", numero: 55 },
  { nimi: "Hessu Hopo", numero: 45 },
];

let uusihenkilo = { nimi: "Iines Ankka", numero: 55 };

henkilot.push(uusihenkilo);

function lisays(henkilot) {
  henkilot = this.henkilot;
  var nimi = input.question("Anna nimi: ");
  var numero = input.questionInt("Anna puhelinnumero: ");
  let henkilo = [{ nimi, numero }];
  henkilot.push(henkilo);
  console.log("Henkilö lisätty luetteloon.");
}

function haku(henkilot) {
  let haettunimi = input.question("Kenen puhelinnumeron haluat hakea? ");
  //for (let i = 0; i < henkilot.length(); i++) {
  for (let i = 0; i < henkilot.length; i++) {
    /*if (x == haettunimi) {
      return henkilot[x].numero;
    }*/
    /*if (haettunimi == x) {
      return henkilot.get(x);
    }*/
    if (henkilot[i].nimi == haettunimi) {
      return henkilot[i].numero;
      //break;
    }
  }
}

console.log(
  "Tervetuloa puhelinluetteloon. Valitse haluamasi toiminto kirjoittamalla\ntoiminnon kuvausta vastaava numero ja painamalla enter."
);
console.log(
  "1 Lisää henkilö luetteloon.\n2 Hae puhelinnumero kirjoittamalla nimi."
);
var toiminto = input.question("Mitä haluat tehdä? ");
if (toiminto == 1) {
  lisays();
} else if (toiminto == 2) {
  haku();
} else {
  console.log("Syötteesi on virheellinen, valitse 1 tai 2.");
}
console.log(haku(henkilot));
//for (const ind in taulukko) {
//        if (taulukko[ind] == arvo) return ind;
//  }
