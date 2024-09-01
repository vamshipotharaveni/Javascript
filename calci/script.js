//operators
let addButton = document.querySelector('.btn.add');
let moduloButton = document.querySelector('.btn.modulo');
let clearButton = document.querySelector('.btn.clear');
let delButton = document.querySelector('.btn.del');
let minusButton = document.querySelector('.btn.minus');
let mulButton = document.querySelector('.btn.mul');
let divisionButton = document.querySelector('.btn.division');
let equalButton = document.querySelector('.btn.equal');

//numbers
let sevenButton = document.querySelector('.btn.seven');
let eightButton = document.querySelector('.btn.eight');
let nineButton = document.querySelector('.btn.nine');
let fourButton = document.querySelector('.btn.four');
let fiveButton = document.querySelector('.btn.five');
let sixButton = document.querySelector('.btn.six');
let oneButton = document.querySelector('.btn.one');
let twoButton = document.querySelector('.btn.two');
let threeButton = document.querySelector('.btn.three');
let dotButton = document.querySelector('.btn.dot');
let doubloButton = document.querySelector('.btn.doublo');
let zeroButton = document.querySelector('.btn.zero');

let resbutton=document.querySelector(".res")



let storing="";
let secondnbr=0;
let fstnbr=0;
let oprt="";
let res=0;

//adding
const add=()=>{
   res=fstnbr+secondnbr;
   show(res);
}
addButton.addEventListener('click',()=>{
    let len=storing.length
    if (/[%\*\/\+\-]/.test(storing)) {
        equalButton.click();
        
    }
    resbutton.innerText=storing;
    if (storing ==="" || storing[len-1]==="*" || storing[len-1]==="+" || storing[len-1]==="-" || storing[len-1]==="%" || storing[len-1]==="/"){
        
    }else{
    storing+="+";
    resbutton.innerText=storing;
    }
    
});

//mul
const mul=()=>{
    res=fstnbr * secondnbr;
    show(res);

}

mulButton.addEventListener('click',()=>{
    let len=storing.length
    if (/[%\*\/\+\-]/.test(storing)) {
        equalButton.click();
    }
    resbutton.innerText=storing;
    if (storing==="" || storing[len-1]==="*" || storing[len-1]==="+" || storing[len-1]==="-" || storing[len-1]==="%" || storing[len-1]==="/"){
        
    }else{
    storing+="*";
    resbutton.innerText=storing;
    }
    
    resbutton.innerText=storing;

});

//division
const division=()=>{
       res=fstnbr/secondnbr;
       show(res);
  
    }
    divisionButton.addEventListener('click',()=>{
        let len=storing.length
        if (/[%\*\/\+\-]/.test(storing)) {
            equalButton.click();
        }
        resbutton.innerText=storing;
        if (storing==="" || storing[len-1]==="*" || storing[len-1]==="+" || storing[len-1]==="-" || storing[len-1]==="%" || storing[len-1]==="/"){
            
        }else{
        storing+="/";
        resbutton.innerText=storing;
        }
        
        
        resbutton.innerText=storing;
    });
//madulo
const modulo=()=>{
        res=fstnbr%secondnbr;
       show(res);

    }
    moduloButton.addEventListener('click',()=>{
        let len=storing.length
        if (/[%\*\/\+\-]/.test(storing)) {
            equalButton.click();
        }
        resbutton.innerText=storing;
        if (storing==="" || storing[len-1]==="*" || storing[len-1]==="+" || storing[len-1]==="-" || storing[len-1]==="%" || storing[len-1]==="/"){
            
        }else{
        storing+="%";
        resbutton.innerText=storing;
        }
        
        resbutton.innerText=storing;
    });

//minus
const minus=()=>{
       res=fstnbr-secondnbr;
       show(res);

    }
    minusButton.addEventListener('click',()=>{
        let len=storing.length
        if (/[%\*\/\+\-]/.test(storing)) {
            equalButton.click();
        }
        resbutton.innerText=storing;
    if (storing==="" || storing[len-1]==="*" || storing[len-1]==="+" || storing[len-1]==="-" || storing[len-1]==="%" || storing[len-1]==="/"){
        
    }else{
    storing+="-";
    resbutton.innerText=storing;
    }
   
    resbutton.innerText=storing;
    });

//clear

    clearButton.addEventListener('click',()=>{
        resbutton.innerText="0";
        storing=""
    });
  

//delete

    delButton.addEventListener('click',()=>{
        
        let n = storing.length;
        let newString = storing.slice(0, n - 1);
        storing=newString;
        
        if (n==1 || n==0){
            storing="0"
            resbutton.innerText=storing;
        }else{
            resbutton.innerText=storing;
        }
          // Output: "123"
    });
   

//equal
const show=(a)=>{
    if(a.length>15){
        resbutton.innerText="Range Error";
    }else{
    resbutton.innerText=a;
    storing=a;
}
}

const back=(storing)=>{
if (storing==="" || storing.includes("*") || storing.includes("+") || storing.includes("-") || storing.includes("%") || storing.includes("/") ){
    storing=res;
}else{
    storing="0";
}
}

equalButton.addEventListener('click',()=>{
let parts = storing.split(/([+*/%-])/);
fstnbr= parseFloat(parts[0]);
oprt = parts[1];
secondnbr = parseFloat(parts[2]);
switch(oprt) {
    case "+":
      add();
      break; 
    case "-":
        minus();
      break; 
    case "/":
        division();
        break;
    case "*":
        mul();
        break;
    case "%":
        modulo();    
        break;
    default:
    console.log("Invalid operator");
     
  }

});


    //--------------adding numbers second part----------

    oneButton.addEventListener('click',()=>{
        if (storing.length<=16){
        storing+="1"
        }
        else{
            alert("Number Limit Exceed")
        }
        resbutton.innerText=storing;
        back(storing);
    });
    twoButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="2"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    threeButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="3"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    fourButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="4"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    fiveButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="5"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    sixButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="6"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    sevenButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="7"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    eightButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="8"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    nineButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="9"
            }
            else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    zeroButton.addEventListener('click',()=>{
        if (storing.length<=16){
            storing+="0"
            }else{
                alert("Number Limit Exceed")
            }
        resbutton.innerText=storing;
        back(storing);
    });
    doubloButton.addEventListener('click',()=>{
        storing+="00"
        resbutton.innerText=storing;
        back(storing);
    });
    dotButton.addEventListener('click', ()=>{
        let parts1 = storing.split(/([+*/%-])/);
        let fstnbr1 = parseFloat(parts1[0]);
        let oprt1 = parts1[1];
        let secondnbr1 = parseFloat(parts1[2]);
      
        if (!(fstnbr1 + "").includes(".")) {
          if (fstnbr1 % 1 === 0) {
            parts1[0] += ".";
          }
        }
        if (!(secondnbr1 + "").includes(".")) {
          if (secondnbr1 % 1 === 0) {
            parts1[2] += ".";
          }
        }
      
        storing = parts1.join("");
        resbutton.innerText = storing;
        back(storing);
      });