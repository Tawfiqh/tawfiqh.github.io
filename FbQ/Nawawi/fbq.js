function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const lowerBound = 1
const upperBound =  42
var currentHadith;

function validNumberInRange(hadith){
    return Math.min(Math.max(hadith, lowerBound), upperBound);
}

function _decrementButtons(){
    currentHadith = validNumberInRange(currentHadith -1);
    setupPageContent()
}

function _incrementButtons(){
    currentHadith = validNumberInRange(currentHadith +1);
    setupPageContent()
}

function setUrlWithCurrentHadith(){
    window.location.hash = currentHadith
}

function setupPageContent(){
    console.log(currentHadith)

    var rootDestination = "http://sunnah.com/nawawi40/"
    var destination = rootDestination + currentHadith
    document.getElementById('hadith-iframe').src = destination;
    setUrlWithCurrentHadith()

}


document.addEventListener("DOMContentLoaded", function(event) {

    if(window.location.hash) {
        hashNumber = Number(window.location.hash.substring(1))
        currentHadith = validNumberInRange(hashNumber)
    }
    else{
       currentHadith = getRandomInt(lowerBound,upperBound);
    }
    setupPageContent()

});
