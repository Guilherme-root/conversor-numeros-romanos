const convertBtb = document.getElementById('convert-btn');
const number = document.getElementById('number')
const output = document.getElementById('output')

function convertToRoman (input){
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100, 
    XC: 90, 
    L: 50, 
    XL: 40,
    X: 10,
    IX: 9, 
    V: 5, 
    IV: 4,
    I: 1,
  };
  
  let accumulator = '';
  let currentInput = input;

  for(const key in lookupTable){
    while(currentInput >= lookupTable[key]){
      accumulator += key;
      currentInput -= lookupTable[key]
    }
  }
    return accumulator;
}

convertBtb.addEventListener("click", () => {
  const inputValue = number.value;
  const arabicNum = Number.parseInt(inputValue, 10);

  if(inputValue === ' ' || Number.isNaN(arabicNum)){
    output.innerText = "Please enter a valid number";
  } else if(arabicNum <= 0){
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if(arabicNum >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999"
  } else {
    const romanNum = convertToRoman(arabicNum);
    output.innerText = `${romanNum}`
  }
  output.removeAttribute('hidden');
})

 