/*for (let i = 0; i < 10; i++ ) {
    console.log (i);
    alert (i)

}
*/
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
     let resultado = ingresarNumero * i ;
       console.log(ingresarNumero +" X "+ i +" = "+ resultado);
        if (i==6) {break;}
        alert (i)  }
