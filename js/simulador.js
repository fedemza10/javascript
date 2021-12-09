
const calcularMostrar = (recargo) => {
    const total = cantidadP * recargo;
    let valorCuota = total / cantidadCuotas;
    alert("Total financiado $ " + total.toFixed());
    alert(" Valor de cada cuota $ " + valorCuota.toFixed());
  
    console.log("Total $ ", total.toFixed());
    for (let i = 1; i <= cantidadCuotas; i++) {
      console.log("Cuota Nro:  " + i + " - $ " + valorCuota.toFixed(2));
    }
  };
  let recargo3 = 1.1;
  let recargo6 = 1.2;
  let recargo12 = 1.4;
  
  let nombreD = prompt("Cual es tu nombre?").toUpperCase();
  
  if (!nombreD /*|| nombre !== '' */) {
    alert("Debe introducir un nombre");
    console.log("introducir nombre");
    throw new Error("obligatorio introducir nombre");
  } else {
    let cartel = "Bienvenido" + " " + nombreD;
    alert(cartel);
    console.log(cartel);
    console.log(nombreD.toUpperCase(), typeof nombreD);
  }
  
  let edad = prompt("Cual es tu edad?");
  if (edad >= 18) {
    alert("Acceso concedido");
    console.log(edad, typeof +edad);
    console.log("Acceso Concedido");
  } else {
    alert("Acceso Denegado - Debes ser mayor de 18 años");
    console.log("Acceso Denegado");
    throw new Error("Debes ser mayor de 18 años de edad");
  }
  
  let prestamo = +prompt(
    "Desea solicitar un préstamo para empleados? 1-SI  2-NO"
  );
  if (prestamo != 1) {
    alert(" Hasta luego");
    console.log("Hasta Luego");
    throw new Error("Cortar ejecución, no desea el producto");
  } else prestamo == 1;
  {
    alert(" Sigamos adelante");
    console.log("Sigamos adelante");
  }
  
  let cantidadP = +prompt(
    " Ingresa el monto del préstamo. Según tu score, sólo puedes tomar des $10.000 hasta $50.000 en  3, 6 0 12 cuotas con interes. "
    );
  while (cantidadP < 10000) {
    alert(
      "Sólo puedes tomar de $10.000 hasta $50.000 en  3, 6 0 12 cuotas con interes "
    );
    cantidadP = +prompt(
      "Según tu score, sólo puedes tomar des $10.000 hasta $50.000 en  3, 6 0 12 cuotas con interes.Ingresa el monto del préstamo"
    );
  }
  if (cantidadP > 50000) {
    alert("Excede límite. Hasta luego");
    console.log("No acepto la propuesta de prestamo");
    throw new Error("Cortar ejecucion, no acepto la propuesta");
  } else cantidadP >= 10000 || cantidadP <= 50000;
  {
    alert(" A continuación, debes seleccionar la cantidad de cuotas");
    console.log("aceptó y debe elegir cuotas");
  }
  
  let cantidadCuotas = +prompt(" Seleccionar 3, 6 o 12 cuotas");
  console.log(" Elige cuotas");
  if (cantidadCuotas == 3) {
    calcularMostrar(recargo3);
  } else if (cantidadCuotas == 6) {
    calcularMostrar(recargo6);
  } else if (cantidadCuotas == 12) {
    calcularMostrar(recargo12);
  } else {
    alert(" No se ingresó un valor correcto");
    console.log("No se ingreso valor correcto.");
    throw new Error("El valor ingresado es invalido");
  }
  
  class Deudores {
    constructor ( nombreD, cantidadP) {
      this.nombreD = nombreD
      this.cantidadP = cantidadP
     
    }
  
    getNombreD () {
     return this.nombreD
    }
    getCantidadP () {
      return this.cantidadP
    }
    getRecargo() {
        return this.recargo
    }
    
  }
  let deudor1 = new Deudores (nombreD, cantidadP)
  
  console.log (deudor1)