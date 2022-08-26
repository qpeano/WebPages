let number = 0; 
let is_prime = false;
let factors = []; 
const inputEL = document.getElementById("input-el"); 
const checkBtn = document.getElementById("check-btn"); 
const displayEL = document.getElementById("display-el"); 

// 
checkBtn.addEventListener("click", function() {
  
  if(inputEL.value) {
    
    number = parseInt(inputEL.value); 
    inputEL.value = ""; 
    is_prime = isPrime(number); 
    render(is_prime); 
  }
  else {
    
    displayEL.textContent = "nothing. Perhaps you should pick a number before clicking check"; 
  }
});

// renders out text
function render(is_prime) {
  
  if(is_prime === true) {
    
    displayEL.textContent = `Yes. ${number} is a prime number`; 
  }
  else {
    
    if (number >= 4) {
      
      factors = primeFactors(number); 
      displayEL.textContent = `No. The prime factors of ${number} are: ${factors}`;
    }
    else {
      
      displayEL.textContent = `No. ${number} is not a prime number`; 
    }
  }
}

// checks if a number is prime or not
function isPrime(number) {
  
  let res = false; 
  if(number === 1) {
  }
  else {
    
    for(let den = 2; den <= number; den++) {
      
      if((number > den) && (number % den === 0)) {
         break; 
      }
      else if (number === den) {
        res = true;
        break; 
      }
    }
  }
  return res; 
}

// function will return all factors of a composite (factor >= 1) 
function primeFactors(number) {
  
  const newArr = []; 
  let div = 2; 
  
  while (div <= number) {
    
    if (number % div === 0) {
      
      number /= div; 
      newArr.push(div); 
    }
    else {
      
      div++; 
    }
  }
  
  return newArr; 
}
