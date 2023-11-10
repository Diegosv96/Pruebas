//alert("hola");

var plantilla = document.getElementById("plantilla");
plantilla.innerHTML += "Buona sera <br><br>"

document.write("Holaaa! " + "<br><br>");

let numero;
let i = 1;

/*
                    var cadena = prompt("Introduce una cadena:");
                    var numchar = cadena.length;    //Devuelve la longitud del string.
                    var caracter;
                    var i;
                    for (i = 0; i < numchar; i++) {
                    caracter = cadena.charAt(i);    //recupera el caracter i del string.
                    if (i == numchar - 1) {
                        document.write(caracter);
                    }
                    else {
                        document.write(caracter + "-");
                    }
                    }          
                                        */

/*
let respuesta = prompt('Eres culpable?', '');
var msg;
if (respuesta = 'si'){
    msg = 'Iras a la carcel';
} else {
    msg = 'pa casa';
}
alert(msg);

document.write(msg);
*/

/*
let topp = window.prompt('que topping quieres?', 'ninguno');
let mensaje = 'el precio es:';
let helado = 1.90;
let precio;
let men;

switch (topp) {
    case 'oreo':
        precio = helado + 1;
        break;
    case 'kitkat':
        precio = helado + 0.80;
        break;
    case 'choco':
        precio = helado + 1.15;
        break;
    case 'ninguno':
        precio = helado;
       break;

    default:

        men = 'no tenemos ese topping. ';
        document.write(men);
        precio = helado;
        break;
}

document.write(mensaje + precio);

*/

/*
for (i = 1; i < 101; i++){
    document.write('El numero mostrado es ' + i + '.');
    document.write('<br>');
}
*/
/*
i = 25;
while (i <= 50) {
    document.write('Numero ' + i + '<br>');
    i++;
}
*/
/*
do {
    document.write('Num ' + i + '<br>');
    i++;
} while (i <= 20);
*/
/*
let coches = { marca: 'BMW', motor: '300', tipo: 'deportivo' };

for (i in coches) {
    document.write(coches[i] + ' ');
}

let fruta = ['banana', 'pera', 'limon'];
let x;
document.write('<br><br>');
for (x of fruta) {
    document.write(x + ' ');
}
*/
plantilla.innerHTML += "prueba";

function suma(a, b) {
    return a + b;
}

plantilla.innerHTML += " " + suma(3, 7) + "<br>";

let multiplicacion = [];

function tablamultiplicar(j) {
    for (i = 1; i < 11; i++){
        multiplicacion.push('<br>' + j + ' x '+ i +' = ' + j * i);
       // plantilla.innerHTML += '<br>' + j + ' x '+ i +'= ' + j * i;
    }
          plantilla.innerHTML += multiplicacion;  
}

numero = prompt('pon un numero', 'none');
tablamultiplicar(numero);

function ejercicio() {
    let musica = ["jazz", "blues"];

    musica.push('rock-n-roll');

    let long = musica.length;
    long = Math.trunc((long - 1) / 2);
    musica[long] = 'classic';
    
    alert(musica.shift());

    musica.unshift('rap', 'reggae');

    plantilla.innerHTML += '<br><br>' + musica;
}
ejercicio();

function sumImput() {
    let sol = 0;
    let li = [];
    let multi = 1;

    while (true) {
        sol = prompt('numerito', '0');
        if (sol == '' || sol == null || !isFinite(sol)) break;
        li.push(sol);
    }

    for (i = 0; i < li.length;i++){
        multi = multi*li[i];
    }
    alert(multi);

}
sumImput();

