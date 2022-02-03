
 export const calcularMostrar = (recargo) => {
    let total = cantidadP * recargo;
    let valorCuota = total / cantidadCuotas;
    console.log("Total financiado $ " + total.toFixed());
    console.log(" Valor de cada cuota $ " + valorCuota.toFixed());
    
    $("#tabla").append(`
    <article class="container">
                             
      <table class=" table mt-5 ">
                       
        <th class=" col tabla__Th d-flex justify-content-start ">  
          Capital solicitado  = $ ${cantidadP} 
           </th>
        <th class=" col tabla__Th d-flex justify-content-start ">  
            Total Financiado  = $ ${total.toFixed()} 
            </th>
        <th class=" col tabla__Th d-flex justify-content-start ">  
            Cantidad de cuotas = ${cantidadCuotas}                                     
                     
       </table>
    </article>          
                            `);
    for (let i = 1; i <= cantidadCuotas; i++) {
      console.log("Cuota Nro:  " + i + " - $ " + valorCuota.toFixed(2));
      $("#esquemaCuota").append(`
         <article class="container">
                   
             <table class=" table ">
            
                <th class=" col tabla__Th d-flex justify-content-start "> 
                  ${"Cuota Nro:  " + i + " - $ " + valorCuota.toFixed(2)} 
                </th>    
              </table>
        </article>          
                 `);
    }
    
  };
  let recargo1 = 1.2;
  let recargo2 = 1.3;
  let recargo3 = 1.4; 