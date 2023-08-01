let Flecha_Feature=document.getElementById('Flecha__Feature');
var Flecha_Company=document.getElementById('Flecha__Company');
let Feature=document.getElementById('Features');
let Company=document.getElementById('Company');
let cont=1;


Flecha_Feature.addEventListener('click',()=>{
    Feature.style.display='grid';
    cont=1;
    if (cont==1){
        Cambiar_Feature()  
    }
    
})

Flecha_Company.addEventListener('click', ()=>{
    Company.style.display='grid';
    cont=1;
    if(cont==1){
        Cambiar_Company() 
    }

})


function Cambiar_Feature(){
    Flecha_Feature.src = '/images/icon-arrow-up.svg';
    Flecha_Feature.addEventListener('click', ()=>{
        cont=2;
        if(cont==2){
            Cerrar__Feature()
        }
        
    })
 }

 function Cerrar__Feature(){   
    Flecha_Feature.src = '/images/icon-arrow-down.svg';
    Feature.style.display='none';
    
 }

 function Cambiar_Company(){
     Flecha_Company.src = '/images/icon-arrow-up.svg'; 
     Flecha_Company.addEventListener('click', ()=>{
        cont=2;
        if(cont==2){
            Cerrar__Company()
        }
    })  
}
function Cerrar__Company(){
    Flecha_Company.src= '/images/icon-arrow-down.svg';
    Company.style.display='none';
    
 } 