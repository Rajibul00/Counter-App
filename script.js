let inpvl = 0;
let inputvalue = document.querySelector('#input');
function minus(){
    inpvl--;
inputvalue.value = inpvl;

if(inputvalue.value <0){
    inputvalue.style.color ='red'
}else{
    inputvalue.style.color ='black'
}

}
function add(){
    inpvl++;
inputvalue.value = inpvl;
if(inputvalue.value >0){
    inputvalue.style.color ='green'
}else{
    inputvalue.style.color ='black'
}
}
function reset(){
   inpvl = 0
inputvalue.value = inpvl;

}
