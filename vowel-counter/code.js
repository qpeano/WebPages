let entireText = ""; 
let vowelsCounter = 0; 
const vowelsRegex = /[aeiou]/gi; 
const textEL = document.getElementById("text-el"); 
const checkBtn = document.getElementById("check-btn"); 
const clearBtn = document.getElementById("clear-btn"); 
const vowelsEL = document.getElementById("vowels-el");

checkBtn.addEventListener("click", function() {
  
  if (textEL.value) {
    
    entireText = textEL.value;
    vowelsCounter = checkRegex(entireText, vowelsRegex); 
    render(vowelsCounter); 
  }
  else {
    
    vowelsEL.textContent = `there is no text to look through`; 
  }
}); 

clearBtn.addEventListener("dblclick", function() {
  vowelsEL.textContent = ""; 
  textEL.value = ""; 
});

function checkRegex(txt, regex) {
  
  let characters = txt.match(regex); 
  return characters.length; 
}

function render(counter) {
  
  vowelsEL.textContent = `number of vowles: ${vowelsCounter}`; 
}
