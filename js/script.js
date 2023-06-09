'use strict';

const body = document.querySelector('body');
const num = document.querySelectorAll('.num');
const circle = document.querySelector('.circle')
const inputNum = document.getElementById('input-num');
const button = document.querySelectorAll('button');



const toggle = (num,val,percent,elbody,elcircle)=>{
  if(num.textContent === val){
    elbody.classList.add(`active-${val}`)
    elcircle.style.left = `${percent}%`;
  }
  else{
    elbody.classList.remove(`active-${val}`)
  }
}

//ALTERAR TEMA DA CALCULADORA
num.forEach(number =>{
  number.addEventListener('click',() =>{

    toggle(number,'1',0,body,circle)
    toggle(number,'2',30,body,circle)
    toggle(number,'3',65,body,circle)

  })
})



button.forEach(btn =>{
  btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const btnVal = btn.textContent;
    if(btnVal === 'RESET'){
      
       inputNum.value = '';
    }
    else if(btnVal === '='){
      inputNum.value = eval(inputNum.value);
    }
    else if(btnVal === 'DEL'){
      inputNum.value = inputNum.value.substr(0,inputNum.value.length -1 )
    }
    else{
      inputNum.value += btnVal;
    }
    
  });
});


