
const paseDia = document.getElementById('pase_dia');
const paseCompleto = document.getElementById('pase_completo');
const paseDosdias = document.getElementById('pase_dosdias');
const btnCalcular  = document.getElementById('calcular');

const precioPorDia = 30;
const precioPaseCompleto = 50;
const precio2Dias = 45;
let total = 0;

btnCalcular.addEventListener('click', calcular);

function calcular(e){
   e.preventDefault();
   let valor1dia = paseDia.value;
   let valorPaseCompleto = paseCompleto.value;
   let valor2dias = paseDosdias.value;

      if (paseDia.value === "" && paseCompleto.value === "" && paseDosdias.value === ""){
         alert('Eliga sus Boletos')
      }
      else {  
      //Detalle de la lista de productos  
         const listaProductos = document.getElementById('lista-productos')
         listaProductos.style.display = 'block'
         
         let boletoDia= '<h5>' + paseDia.value + ' boletos pase por día  '+'$'+ valor1dia * precioPorDia  + '</h5>'
         let boletoCompleto = '<h5>' + paseCompleto.value + ' boletos pase todos los días  '+'$'+ valorPaseCompleto * precioPaseCompleto+ '</h5>'
         let boletoSabDom = '<h5>' + paseDosdias.value + ' boletos pase Sábado y Domingo  '+'$'+ valor2dias * precio2Dias +'</h5>'
         
         let detalle ="";
         if (paseDia.value >=1) detalle+= boletoDia;
         if (paseCompleto.value >=1) detalle+= boletoCompleto;
         if (paseDosdias.value >=1) detalle+= boletoSabDom;
         listaProductos.innerHTML = detalle;
    
    //Calular Monto total
       let total = (valor1dia * precioPorDia) + (valorPaseCompleto * precioPaseCompleto) + (valor2dias * precio2Dias);
       document.getElementById('suma-total').innerText = '$' + total;
   }
}