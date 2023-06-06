const body = document.querySelector('body');
const num = document.querySelectorAll('.num');
const circle = document.querySelector('.circle')

//ALTERAR TEMA DA CALCULADORA
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



