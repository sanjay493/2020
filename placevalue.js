let outPut = [ ];
function randomNumber(numb){
let ones;
if(numb<10){
    ones=numb;
    //console.log(ones);
    outPut.push(ones);
}else
{ 
    ones = numb%10;
    //console.log(ones);
    outPut.push(ones);
numb=(numb-ones)/10;
randomNumber(numb);
}
};


const inputNumber = document.querySelector('.inputNumber');
const btnNumber = document.querySelector('.btnNumber');
const outDisplay = document.querySelector('.outputPlace');
btnNumber.addEventListener('click', getOutput)

function getOutput(){
    randomNumber(inputNumber.value);
    console.log(outPut);
for( var i=0; i<outPut.length;i++){
    let placeValue='1';
    if(i==0){
        //console.log(placeValue + ' ' + outPut[i]);
    
       outDisplay.innerHTML=placeValue + 's   Place Value is : ' + outPut[i];
    }
 else
    {
        for( var j=0; j<i; j++){
       let zero ='0';
       placeValue +=zero;
      

        }
        //console.log(placeValue + ' ' + outPut[i]);
        let x =document.createElement("p");
       let t = document.createTextNode(placeValue + 's   Place Value is : ' + outPut[i]);
       x.appendChild(t);
       document.querySelector('.outputPlace').appendChild(x);
    }
    
}

}