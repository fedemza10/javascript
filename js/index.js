
//Importo desde de archivos .js

import {calcularMostrar} from "./calcular.js"
import {formulario2} from "./formulario2.js"

$(window).on("load", function () {
  console.log("Todo cargado correctamente 😁");
  
  
  //$("#formulario2").hide();
  

// Se carga un formulario de acceso en prestamos.html y luego continua todo el proceso por JS.
  
  // Validación de datos (mediante inputs) para ingresar
  $("#btn1").click((event) => {
    
    let user = $("#iduser").val();
    let password = $("#password").val();

    event.preventDefault();

    console.log(event.target);

    if (user == "CODERHOUSE" && password == "ALFA") {
      const cartel1 = "Bienvenido";
      alert(cartel1);
      // Sólo si el login es correcto, se despliega formulario de  contenido de formulario2.js

     // $("#formulario2").show();
     
      $("#formcreditoA").append(`${formulario2}`);

    } else {
      const cartel2 = " Acceso Denegado";
      alert(cartel2);
      console.log("acceso denegado");
      console.log(user + " " + password + " están erroneos");
    }
  });
  
  const  URL_JSON = "db/data.json"

  $('#btnId').click ( (event) => {  
    event.preventDefault()
    console.log (event.target)
    $.getJSON (URL_JSON, ( response, status) => {
        if ( status === 'success') {
        
        for (const user of response) 
          $('#verificaId').append 
               (`<div> 
                     <p> ${user.id}  </p>
                     <p>${user.name} </p>
                     <p>${user.Unidad} </p> 
                       
                       </div>`)
        
       }
        else  throw new Error ("ERROR")
      }
    ) 
  }
  )
  
  // TENGO QUE DECLARAR LAS VARIABLES POR FUERA DEL AMBITO LOCAL (FUNCION)
  let cantidadP = Number($("#capital").val());
  let cantidadCuotas = Number($("#plazo").val());

  $("#btn2").click((event) => {
    event.preventDefault();
    // VUELVO A PEDIR EL VALOR DE LAS VARIABLES POR DENTRO DEL SCOPE LOCAL PARA HACER LAS COMPROBACIONES

    cantidadP = Number($("#capital").val());
    cantidadCuotas = Number($("#plazo").val());
    console.log(event.target);
    
    // CONSOLEO PARA TESTEAR LOS VALORES
    console.log(cantidadP);
    console.log(cantidadCuotas);

    while (cantidadP < 100000) {
      alert("Sólo puedes tomar de $100.000 hasta $500.000 ");
      throw new Error(
        "Cortar ejecucion, sólo puedes tomar de $100.000 hasta $500.000."
      );
    }
    if (cantidadP > 500000) {
      alert("Excede límite.Sólo puedes tomar de $100.000 hasta $500.000");
      console.log("Excede límite, debe reintentar.");
      throw new Error("Cortar ejecucion, excede límite.");
    } else cantidadP >= 100000 || cantidadP <= 500000;
    {
      console.log("aceptó y debe elegir cuotas");
    }

    // Switch para elegir la cantidad de cuotas.
    switch (cantidadCuotas) {
      case 3:
        calcularMostrar(recargo1);
        break;
      case 6:
        calcularMostrar(recargo2);
        break;
      case 12:
        calcularMostrar(recargo3);
        break;
      default:
        alert(" No se ingresó un valor correcto");
        console.log("No se ingreso valor correcto.");
        throw new Error("El valor ingresado es invalido");
    }

    
    
    
  });
 /* const calcularMostrar = (recargo) => {
    let  total = cantidadP * recargo;
    let valorCuota = total / cantidadCuotas;
    console.log("Total financiado $ " + total.toFixed());
    console.log(" Valor de cada cuota $ " + valorCuota.toFixed());
    
    $("#tabla").append(`
    <article class="container">
                             
      <table class=" table mt-5 ">
                       
        <th class=" col tabla__Th d-flex justify-content-start ">  
          Capital solicitado  = $ ${cantidadP} 
           </th>
        <th  class=" col tabla__Th d-flex justify-content-start ">  
            Total Financiado  = $ ${total.toFixed()} 
            </th>
        <th class=" col tabla__Th d-flex justify-content-start ">  
            Cantidad de cuotas = ${cantidadCuotas}                                     
                     
       </table>
    </article>          
                            `);
    for (let i = 1; i <= cantidadCuotas; i++) {
      console.log("Cuota Nro:  " + i + " - $ " + valorCuota.toFixed(2));
      $(".esquemaCuota").append(`
         <article class="container">
                   
             <table class=" table ">
            
                <th class=" col tabla__Th d-flex justify-content-start "> 
                  ${"Cuota Nro:  " + i + " - $ " + valorCuota.toFixed(2)} 
                </th>    
              </table>
        </article>          
                 `);
    }
    const deudor = new Deudores ($('#legajo').val(),$('#apellidoyN').val(), total, cantidadCuotas );
    console.log(deudor)
    
  };

  let recargo1 = 1.2;
  let recargo2 = 1.3;
  let recargo3 = 1.4;

  class Deudores {
    constructor(id, nombre,  deuda, cuotas) {
      this.id = id
      this.nombre = nombre
      this.deuda = deuda;
      this.cuotas = cuotas;
      
    }
    getId() {
      return this.id
    }

    getNombre() {
      return this.nombre;
    }
    getDeuda() {
      return this.deuda;
    }
  
    
  }
  */
});
