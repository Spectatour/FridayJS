console.clear

console.log('1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)')
console.log('-------------------------------')
a = 5;
b = 3;

if (a > b) {
    console.log('a yra didesnis uz b');
} else if (a < b) {
    console.log('b yra didesnis uz a');
} else {
    console.log('a ir b yra lygus')
};
console.log('-------------------------------')
console.log('2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)')
console.log('-------------------------------')

for (let index = 1; index <= 10; index++) {
    console.log(index)
}

console.log('-------------------------------')
console.log('3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)')
console.log('-------------------------------')

for (let index = 0; index <= 10; index += 2) {
    console.log(index)
}

console.log('-------------------------------')
console.log('4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)')
console.log('-------------------------------')

for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
}

console.log('-------------------------------')
console.log('5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)')
console.log('-------------------------------')

let atsitiktinis = 1;
while (atsitiktinis !== 5) {
    atsitiktinis = Math.floor(Math.random() * 10) + 1;
    console.log(atsitiktinis);
}

console.log('-------------------------------')
console.log('6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)')
console.log('-------------------------------')

let masyvas = [];
let mIlgis = Math.floor(Math.random() * 11) + 20;

for (let i = 0; i < mIlgis; i++) {
    let reiksme = Math.floor(Math.random() * 21) + 10;
    masyvas.push(reiksme);
}

let didziausias = masyvas[0]

for (let i = 1; i < masyvas.length; i++) {
    if (masyvas[i] > didziausias) {
        didziausias = masyvas[i];
    }
}
console.log('Visas masyvas = ', masyvas, 'Didziausia reiksme yra = ', didziausias);

console.log('-------------------------------')
console.log('7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)')
console.log('-------------------------------')

let arr = [];
let raides = ['A', 'B', 'C', 'D'];

for (let i = 0; i < 100; i++) {
    let index = Math.floor(Math.random() * raides.length);
    let raidė = raides[index];
    arr.push(raidė);
}

let total = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
};

for (let i = 0; i < arr.length; i++) {
    let raidė = arr[i];
    total[raidė]++;
}
console.log('Iš viso yra ->', 'A:',total.A,'B:',total.B,'C:',total.C,'D:',total.D);

console.log('-------------------------------')
console.log('8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas),Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)')
console.log('-------------------------------')

function lygineSuma(c, d){
    const suma = Array.isArray(c) && Array.isArray(d) ? c.length + d.length : c + d;
    return suma % 2 === 0 ? suma : 'Suma yra nelygine'
}

console.log(lygineSuma(6, 10));
console.log(lygineSuma(6, 9));
console.log(lygineSuma([4, 2, 0], [0, 2, 4]));
console.log(lygineSuma([4, 2, 0], 7));

console.log('-------------------------------')
console.log('9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)')
console.log('-------------------------------')

function pirminisSkaicius(n) {
    if (typeof n !== 'number' || n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
}
console.log(pirminisSkaicius(5));
console.log(pirminisSkaicius(6));


console.log('-------------------------------')
console.log('10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)')
console.log('-------------------------------')


let mobilus = [0,1,2,3,4,5,6,7,8,9]

function telefonoNumeris(mobilus) {
    let numeris = '(' + mobilus.slice(0,3).join('')+ ')' + mobilus.slice(3,6).join('') + '-' + mobilus.slice(6,10).join('');
    return numeris;
}

console.log(telefonoNumeris(mobilus));