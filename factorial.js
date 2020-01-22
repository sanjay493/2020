
function factorial(x){
if(x == 0)  return 1;
else return x*factorial(x-1);
}



const inputFactNumber = document.querySelector('.inputFactNumber');
const btnFactNumber = document.querySelector('.btnFactNumber');
const outFactDisplay = document.querySelector('.outputFact');
btnFactNumber.addEventListener('click', getfactorial)

function getfactorial(){
   outFactDisplay.innerHTML= `The Factorial of ${inputFactNumber.value} is : ${factorial(inputFactNumber.value)}`;
    }