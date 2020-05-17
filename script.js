var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var offset = (width > 425) ? -170: -100;

var acronyms = [];

var slotLeft = document.getElementsByClassName("machine__acronyms")[0];
var slotMedium = document.getElementsByClassName("machine__acronyms")[1];
var slotRight = document.getElementsByClassName("machine__acronyms")[2];

var acrDisplay = ['?', '?', '?'];
var firstTime = true;
var listOnTop = false;


function shuffleList() {
    acronyms = [['M', 'V', 'P'],
    ['C', 'J', 'M'],
    ['K', 'P', 'I'],
    ['G', 'U', 'I'],
    ['C', 'L', 'I'],
    ['U', 'J', 'M'],
    ['O', 'M', 'G'],
    ['H', 'C', 'I'],
    ['U', 'C', 'D'],
    ['I', 'X', 'D'],
    ['S', 'V', 'G'],
    ['J', 'P', 'G'],
    ['P', 'N', 'G'],
    ['G', 'I', 'F'],
    ]
    for(i = (acronyms.length-1); i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = acronyms[i];
        acronyms[i] = acronyms[j];
        acronyms[j] = temp;
    }
    for( var i = 0; i < acronyms.length; i++){ if ( acronyms[i] === acrDisplay) { acronyms.splice(i, 1); }}
    if (listOnTop === false) {
        acronyms.unshift(acrDisplay);
    }
    else {
        acronyms.push(acrDisplay);
    }
    // if (firstTime === false) {
        
    // }
    // else {
    //     firstTime = false;
    // }
}

function appendLetter(slot, word, letter) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(acronyms[word][letter]);  
    node.appendChild(textnode);   
    slot.appendChild(node);
}
buildSlots();

function clearSlots(slot) {
    while (slot.firstChild) {
        slot.removeChild(slot.lastChild);
      }
}

function buildSlots() {
    clearSlots(slotLeft);
    clearSlots(slotMedium);
    clearSlots(slotRight);
    shuffleList();
    for(i=0;i<(acronyms.length);i++) {
        console.log('hi');
        appendLetter(slotLeft, i, 0);
        appendLetter(slotMedium, i, 1);
        appendLetter(slotRight, i, 2);
    }
}

var currMar = 0;


function slideSlots() {
    if (currMar !== 0) {
        console.log(currMar)
        slotLeft.style.marginTop = "0";
        slotMedium.style.marginTop = "0";
        slotRight.style.marginTop = "0";
        currMar = 0;
        listOnTop = true;
        acrDisplay = acronyms[0];
        acronyms.pop();
        console.log("so");
        console.log(acronyms);
    }
    else {
        var shift = offset * (acronyms.length-1);
        var newMargin = shift.toString() + "px";
        slotLeft.style.marginTop = newMargin;
        slotMedium.style.marginTop = newMargin;
        slotRight.style.marginTop = newMargin;
        currMar = newMargin;
        listOnTop = false;
        acrDisplay = acronyms[acronyms.length-1];
        acronyms.shift();
    }
    buildSlots();
}
  