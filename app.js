let counter = 0;
let counter1 = 0;
let counter2 = 0;

let iconos = document.getElementById("iconos");
let increase =document.getElementById("increase");


increase.addEventListener('click', (e)=>{
    counter ++;
  

    increase.innerHTML = counter;
})

let iconos1 = document.getElementById("iconos1");
let increase1 =document.getElementById("increase1");

increase1.addEventListener('click',(e)=>{
    counter1 ++;

    increase1.innerHTML = counter1;
})


let iconos2= document.getElementById("iconos2");
let increase2 = document.getElementById ("increase2");

increase2.addEventListener('click',(e)=>{
    counter2 ++;

    increase2.innerHTML = counter2;
})