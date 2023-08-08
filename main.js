let Flecha_Feature=document.getElementById('Flecha__Feature');
var Flecha_Company=document.getElementById('Flecha__Company');
let Feature=document.getElementById('Features');
let Company=document.getElementById('Company');
let Abrir=document.getElementById('Abrir__Menu');
let Cerrar=document.getElementById('Cerrar__Menu');
let Menu_Movil=document.getElementById('Menu__Movil');
let Fondo_Negro=document.getElementById('Fondo_Negro');
let Opciones__Feature=document.getElementById('Opciones__Feature');
let Opciones__Company=document.getElementById('Opciones__Company');

let ancho = window.innerWidth;
    
    if (ancho <= 710 ) {
        Menu_Movil.style.display='none';
        Flecha_Feature.addEventListener('click',()=>{
            if(Feature.style.display === 'none' ){
                Feature.style.display='block';
                Flecha_Feature.src = '/images/icon-arrow-up.svg';
                Opciones__Feature.style.height='20vh';
                Opciones__Feature.style.alignItems='normal';
            }
            else{
                Feature.style.display='none'; 
                Flecha_Feature.src = '/images/icon-arrow-down.svg';
                Opciones__Feature.style.height='3vh';
            }
        
        })
  
        Flecha_Company.addEventListener('click', ()=>{
            if(Company.style.display === 'none'){
                Company.style.display = 'block';
                Flecha_Company.src = '/images/icon-arrow-up.svg';
                Opciones__Company.style.height='17vh'
                Opciones__Company.style.alignItems='normal';
            }
            else{
                Company.style.display= 'none';
                Flecha_Company.src = '/images/icon-arrow-down.svg';
                Opciones__Company.style.height='3vh'
            }
        })
        Abrir.addEventListener('click', ()=>{
            if(Menu_Movil.style.display==='none'){
                Menu_Movil.style.display='block'; 
                Fondo_Negro.style.display='block'; 
                Cerrar.style.display='block';      
            }  
        })
        Cerrar.addEventListener('click', ()=>{
            if(Menu_Movil.style.display==='block'){
                Menu_Movil.style.display='none';
                Cerrar.style.display='none';
                Abrir.style.display='block';
                Fondo_Negro.style.display='none';
            }           
        })

    }
    
    if(ancho > 710 ){
        Flecha_Feature.addEventListener('click',()=>{
            if(Feature.style.display === 'none' ){
                Feature.style.display='block';
                Flecha_Feature.src = '/images/icon-arrow-up.svg';         
            }
            else{
                Feature.style.display='none'; 
                Flecha_Feature.src = '/images/icon-arrow-down.svg';           
            }      
        })
    
        Flecha_Company.addEventListener('click', ()=>{
            if(Company.style.display === 'none'){
                Company.style.display = 'block';
                Flecha_Company.src = '/images/icon-arrow-up.svg';
            }
            else{
                Company.style.display= 'none';
                Flecha_Company.src = '/images/icon-arrow-down.svg';            
            }
        })

    }

// else 
//    if (ancho < 1280) 
//       alert("Mediana") 
//    else 
//       alert("Grande") 

// addEventListener("resize", (event) => {
//     alert(screen.width);
// });

// Flecha_Feature.addEventListener('click',()=>{
//     if(Feature.style.display === 'none' ){
//         Feature.style.display='block';
//         Flecha_Feature.src = '/images/icon-arrow-up.svg';
//         Opciones__Feature.style.height='20vh';
//         Opciones__Feature.style.alignItems='normal';
//     }
//     else{
//         Feature.style.display='none'; 
//         Flecha_Feature.src = '/images/icon-arrow-down.svg';
//         Opciones__Feature.style.height='3vh';
//     }

// })

// Flecha_Company.addEventListener('click', ()=>{
//     if(Company.style.display === 'none'){
//         Company.style.display = 'block';
//         Flecha_Company.src = '/images/icon-arrow-up.svg';
//         Opciones__Company.style.height='17vh'
//         Opciones__Company.style.alignItems='normal';
//     }
//     else{
//         Company.style.display= 'none';
//         Flecha_Company.src = '/images/icon-arrow-down.svg';
//         Opciones__Company.style.height='3vh'
//     }
// })



