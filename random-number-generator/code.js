let inpSmall = 0;
let inpBig = 0;
let randomNumber = 0;
const smallestEL = document.getElementById("smallest-el");
const biggestEL = document.getElementById("biggest-el");
const getNumberBtn = document.getElementById("getNumber-btn");
const numberEL = document.getElementById("number-el");

getNumberBtn.addEventListener("click", function () {
  
  if (smallestEL.value != "" && biggestEL.value != "") {
    
    inpSmall = parseInt(smallestEL.value);
    inpBig = parseInt(biggestEL.value);
    console.log(inpBig);
    console.log(inpSmall);
    randomNumber = getRandomNumber(inpSmall, inpBig);
    render(randomNumber);
  }
});

function getRandomNumber(min, max) {
  
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function render(randomNumber) {
  
    numberEL.innerHTML = `your number is ${randomNumber}`;
}
