let nombre = prompt ("Cual es tu nombre?");

   if ( !nombre /*|| nombre !== '' */ ) { alert ( 'Debe introducir un nombre');
    console.log ( 'introducir nombre');
   throw new Error ('obligatorio introducir nombre');}

   else {let cartel  = 'Bienvenido' + ' ' + nombre;
    alert(cartel);
    console.log (cartel);
    console.log (nombre.toUpperCase(), typeof nombre)};


let edad = prompt ('Cual es tu edad?');
   if (  edad >= 18 ) { alert ('Acceso concedido');
    console.log (edad,  typeof +edad);
    console.log ( 'Acceso Concedido');
    }

   else { alert ('Acceso Denegado - Debes ser mayor de 18 años');
    console.log ( 'Acceso Denegado');
    throw new Error ( 'Debes ser mayor de 18 años de edad');}

let prestamo = +prompt ('Desea solicitar un préstamo para empleados? 1-SI  2-NO');
   if (prestamo != 1) {alert (' Hasta luego');
     console.log ('Hasta Luego');
     throw new Error ('Cortar ejecución, no desea el producto');
      }

   else (prestamo ==1);  { alert (' Sigamos adelante');
     console.log ('Sigamos adelante');

     confirmarPrestamo = +prompt  
           ('Según tu score sólo podes tomar $50.000 en  hasta 6 cuotas con un interés total del 10%. 1-SI  2-NO');
            if (confirmarPrestamo !=1) {alert ('Hasta luego');
             console.log ('No acepto la propuesta de prestamo')
            throw new Error ( 'Cortar ejecucion, no acepto la propuesta');
               }
            else (confirmarPrestamo ==1); {alert(' El siguiente es tu esquema de cuotas a pagar a partir del 02/01/2022');
                console.log (' Aceptó el préstamo');
                const suma = (a,b) => a + b;
                const div = (a,b) => a / b;
                const interes = x => x * 0.10;
                let capital =  50000 ;
                let cuotas = 6;
                let valorCuota = div ( suma (capital, interes(capital)), cuotas);
                alert ( valorCuota =  '6 cuotas ' + '  de ' + ' $ ' + valorCuota );
                console.log (valorCuota = valorCuota + ' ' + 'X ' + '6 cuotas');
               } }


