
const displayOne = document.querySelector('.display-1')
const displayTwo = document.querySelector('.display-2')
const finalResult = document.querySelector('.result')
const noButton = document.querySelectorAll('.number')
const opeRator = document.querySelectorAll('.operator')
const equal = document.querySelector('#equal')
const clear = document.querySelector('.clear')
const del= document.querySelector('.delete')
 
let dis1Number ='';
let dis2Number='';
let lastOperation='';
let anSwer= null;
let haveDot = false


noButton.forEach(button=>{button.addEventListener('click', (e)=>{
    if(e.target.innerText ==='.' && !haveDot){
       haveDot= true
    }
    else if(e.target.innerText==='.' && haveDot){
        return;
    }
     dis2Number+=e.target.innerText;
     displayOne.innerText = dis2Number;
    
})
});
opeRator.forEach(operation=>{
    operation.addEventListener('click', (e)=>{
  if(!dis2Number) return;
  haveDot=false
  const equation = e.target.innerText
  if(dis1Number && lastOperation  &&dis2Number){
    opeRate()
    }
  else{
      result = parseFloat(dis2Number)
  }
  lastOperation = equation
   eQuate(equation)
     });
});
function eQuate(name=''){
    dis1Number+= dis2Number+ ' ' +name+ ' '
    dis2Number=''
    displayOne.innerText = dis1Number
    displayTwo.innerText = ''
    finalResult.innerText = '='+result
}
function opeRate(){
  if(lastOperation ==='x' ){
    result = parseFloat(result) * parseFloat(dis2Number)
    
}
else if(lastOperation==='+'){
    result = parseFloat(result) + parseFloat(dis2Number)
}
else if(lastOperation==='-'){
    result = parseFloat(result) - parseFloat(dis2Number)
}
else if(lastOperation==='÷' && parseFloat(dis2Number)===0){
result= 'syntax error'
}
else if( lastOperation==='÷'){
  result =parseFloat(result) / parseFloat(dis2Number)
}
}
 


equal.addEventListener('click', (e)=>{
    if(!dis1Number || !dis2Number) return
   opeRate();
    displayOne.innerText=result
    displayTwo.innerText=''
    finalResult.innerText=''
    dis2Number=''
    dis1Number=''
});
clear.addEventListener('click', (e)=>{
    displayTwo.innerText=''
    displayOne.innerText=''
    finalResult.innerText=''
    dis1Number=''
    dis2Number=''
});
del.addEventListener('click',(e)=>{
  
  dis2Number = dis2Number.slice(0,-1)
  displayOne.innerText=dis2Number
dis1Number=''
  
  }
  )

window.addEventListener("keydown", (e) => {
    if (
      e.key === "0" ||
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "."
    ) {
      numKeys(e.key);
     
    } else if (e.key === "+" || e.key === "-") {
     operationKeys(e.key);
    } else if (e.key === "x") {
     operationKeys("x");
     
    } 
    else if(e.key =="/"){
      operationKeys("÷")
  }

    else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
    }
    else if (e.key=="Backspace" || e.key == "Delete"){
      clickDel();
    }
    
   
  });
  function numKeys(key) {
    noButton.forEach((button) => {
      if (button.innerText === key) {
        button.click();
      }
    });
  }
  function operationKeys(key) {
    opeRator.forEach((operation) => {
      if (operation.innerText === key) {
        operation.click();
      }
    });
  }
  function clickEqual() {
    equal.click();
  }
  function clickDel() {
    del.click();
  }
 