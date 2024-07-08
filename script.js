const wordA = ['puppies','babies','news'];
const wordB = ['best','worst', 'lucky'];
const wordC = ['Eat', 'Dance', 'Cry','Laugh'];
const wordD = ['try', 'play', 'jump'];

const pickAword=() => {
    let a = Math.floor(Math.random() * wordA.length);
    a = wordA[a];
    let b = Math.floor(Math.random() * wordB.length);
    b = wordB[b];
    let c = Math.floor(Math.random() * wordC.length);
    c = wordC[c];
    let d = Math.floor(Math.random() * wordD.length);
    d = wordD[d];

    console.log('Happy ' + a + ' in on its way!');
    console.log('Today is your ' +b+ ' day!');
    console.log(c + ' as if no one is watching.');
    console.log(d+ ' and fail, but never fail to ' +d);
}

pickAword();
