export const formulario2 = () => { $("#formcredito").append(`
<section class="grid__SectionC" >
   <article class="grid__SectionC" >
                    
                    <P class="parrafoTxt d-flex justify-content-center">
                      Corroborá tu id, Unidad de Negocios y completá el formulario de solicitud. 
                      
                    </p>
                    <button class="btn1 rounded  mt-3 ms-5  type="submit" id="btnId"> 
                        Verificar Id y Unidad de negocios
                       
                       </button>

                    <div id="verificaId"> 

                      </div>


                  </article

 <div class="container">
   <div class="row">
     <div class="col">
       <!-- Le agregue el id formulario2 para poder identificarlo mejor -->
       <article class=" formulario1 " id="formulario2" >
         <form class="formulario1__Flex ms-5" action="" method="post" enctype="multipart/form-data" >
          
          <label for="legajo" > Numero de Legajo o ID </label>                
          <input class="input" type="number" name="legajo" id="legajo">

          <label for="Apellido y nombre"> Apellido y Nombre</label>
                       <input class="input" type="text" name="apellido" id="apellidoyN">
          
          <label for="email" > Correo electrónico</label>
          <input class="input" type="email" name="email" id="email">                                              
          
          
          <label for="Unidad de Negocios"> Unidad de Negocios</label>
          <input class="input" type="text" name="negocio" id="unidadNegocio">
          
          <label for="capital mt-3" > Capital a solicitar </label>                
          <input class="input " type="number" name="capital" id="capital" placeholder=" Podes solicitar de $100.000 a $500.000">
          
          <label for="plazo" > Plazo en Meses </label>                
          <input class="input" type="text" name="plazo" id="plazo" placeholder=" 3, 6 O 12 Cuotas.">
          
          
         
         <button class="btn1 rounded  mt-3" type="submit" id="btn2"> SOLICITAR 
          
          </button>
        
        
        
         </form>  
     
       </article>
    
    
     </div>           
    </div>
   </div>

</section>





`);
}


