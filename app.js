const body_Ref = document.querySelector('body')
const parent_Block = document.querySelector('.parent_Block')
const time_Button = document.querySelector('.time_Button')
const un_Sec = document.querySelector('.un_Sec')
const dz_Sec = document.querySelector('.dz_Sec')
const un_Min = document.querySelector('.un_Min')
const dz_Min = document.querySelector('.dz_Min')
const un_Hour = document.querySelector('.un_Hour')
const dz_Hour = document.querySelector('.dz_Hour')

let counter_un_Sec = 0
let counter_dz_Sec = 0
let counter_un_Min = 0
let counter_dz_Min = 0
let counter_un_Hour = 0
let counter_dz_Hour = 0

/* ----------------- CLICK_EVENT + SET_INTERVAL ------------------- */

time_Button.addEventListener('click', event => {
  
  const number_ID = setInterval( () => {
    if( counter_dz_Hour === 1 && counter_un_Hour === 2){
      clearInterval(number_ID)
    }
      
    sec_Count ()
    min_Count ()
    min_dz_Count ()
    un_Hour_Count ()
    dz_Hour_Count ()
    counter_un_Sec++
  } , 5)
})
/* ---------------------------------------------------------------- */
    
function sec_Count () {
  if(counter_un_Sec > 9){
    counter_un_Sec = 0
    counter_dz_Sec++
    dz_Sec.textContent = `${counter_dz_Sec}` 
  }
    un_Sec.textContent = `${counter_un_Sec}`
}

function min_Count () {
  if(counter_dz_Sec === 6 && counter_un_Sec === 0){
    counter_un_Sec = 0
    counter_dz_Sec = 0
    dz_Sec.textContent = 0
    counter_un_Min++
    un_Min.textContent = `${counter_un_Min}`
  }
}

function min_dz_Count () {
  if(counter_un_Min > 9 ){
    counter_un_Min = 0
    un_Min.textContent = 0
    counter_dz_Min++
    dz_Min.textContent = `${counter_dz_Min}`
  }
}

function un_Hour_Count () {
  if(counter_dz_Min === 6 && counter_un_Min === 0 ){
    counter_dz_Min = 0
    dz_Min.textContent = 0
    counter_un_Hour++
    un_Hour.textContent = `${counter_un_Hour}`
}
}

function dz_Hour_Count () {
  if(counter_un_Hour > 9){
    counter_un_Hour = 0
    un_Hour.textContent = 0
    counter_dz_Hour++
    dz_Hour.textContent = `${counter_dz_Hour}`
  }

}

   



























































/* const button_Timer = document.querySelector('.button_Timer')
const body_Ref = document.querySelector('body')

let get_Number_ID
let counter = 1 */
/* ------------------ CLICK EVENT --------------------------------- */
/* button_Timer.addEventListener('click', () => {
  button_Timer.style.color = 'red'

  let number_ID = setInterval( () => {
    get_Number_ID = number_ID
    if( counter === 15){ 
      clearInterval(get_Number_ID)
    }
    insert_Element ()
    counter++

  } , 1000)
}) */
/* -------------------------------------------------------------- */

 /*  function insert_Element () {
    const new_Div = document.createElement('div')
    new_Div.classList.add('d-inline', 'rounded-circle', 'my-2', 'bg-dark', 'text-white', 'text-center', 'fs-5', 'me-1', 'ps-2')
    body_Ref.append(new_Div)
    new_Div.textContent = ` ${counter} `

  } */
  




