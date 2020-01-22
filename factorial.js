
function factorial(x){
    let y = 1;
if(x == 0)  y=1;
else 
{ let y=x*factorial(x-1);
}
return y;
console.log(y);
// return outFactDisplay.innerHTML=y;
}


const inputFactNumber = document.querySelector('.inputFactNumber');
const btnFactNumber = document.querySelector('.btnFactNumber');
const outFactDisplay = document.querySelector('.outputFact');
btnFactNumber.addEventListener('click', factorial)