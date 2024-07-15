const wordObject = {
    wordA : ['puppies','babies','news'],
    wordB : ['best','worst', 'lucky'],
    wordC : ['Eat', 'Dance', 'Cry','Laugh'],
    wordD : ['try', 'play', 'jump']
};

const pickAword=() => {
    let a = Math.floor(Math.random() * wordObject.wordA.length);
    a = wordObject.wordA[a];
    let b = Math.floor(Math.random() * wordObject.wordB.length);
    b = wordObject.wordB[b];
    let c = Math.floor(Math.random() * wordObject.wordC.length);
    c = wordObject.wordC[c];
    let d = Math.floor(Math.random() * wordObject.wordD.length);
    d = wordObject.wordD[d];

    console.log('Happy ' + a + ' in on its way!');
    console.log('Today is your ' +b+ ' day!');
    console.log(c + ' as if no one is watching.');
    console.log(d+ ' and fail, but never fail to ' +d);
}

console.log('My Message Generator');
pickAword(); 
