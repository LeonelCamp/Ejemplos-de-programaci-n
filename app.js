// AQUI SE VAN A MOSTRAR LOS CODIGOS DE LOS DISTINTOS EJEMPLOS PARA APRENDER A PROGRAMAR .
/*generar numero aleatorio para adivinar
let ramdomNumber =  Math.floor(Math.random()*10)+1;
console.log(ramdomNumber);

let iteraciones=5;

for (r=1;r<=iteraciones;r++){
    let usuarNumber= parseInt(prompt('Ingrese un numero del uno al 10'));
    if (isNaN(usuarNumber)){
        alert(`Lo que ingreso ${usuarNumber} no es un numero`);
        r--
        continue;
    }else if(usuarNumber == ramdomNumber){
        alert(`En Efecto el numero secreto era ${ramdomNumber}`);
        break;
    }else{
        usuarNumber>=ramdomNumber ? alert('El numero es menor') : alert('El numero es mayor')        
    }
    if(r === iteraciones ){ alert(`Lo siento, no acertaste. El número secreto era ${ramdomNumber}.`);}
}
*/

let frutas = ["Elemento1", "Elemento2", "Elemento3","Elemento4","Elemento5"];
for (let i = 1; i < frutas.length; i++) {
    console.log(i,frutas[i]);
