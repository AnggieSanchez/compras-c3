// alert("Hola mundo segunda forma")

// console.log("Hola mundo desde consola");

// document.write("<h1>Hola mundo desde JavaScript</h1 >");

// Tipo de datos: String, Number, Boolean;

var nombre = `Anggie`;
let correo = 'angnatalisan@hotmail.com';
let mayor = 18;

let edad = 18;
let altura = 1.81;
let extranjero = false;

let mensaje = "Hola, soy "+nombre+" mi correo es "+correo+" tengo "+edad+" años";

nombre = prompt("Escriba su nombre...")
correo = prompt("Escriba su correo...")
edad = parseInt(prompt("Escriba su edad..."))
altura = parseFloat(prompt("Escriba su altura..."))

let mensaje2 = `Hola, soy ${nombre} mi correo es ${correo} tengo ${edad} años`;

if (edad>mayor) {
    mensaje2 += `, soy mayor de edad`;      
    }else if(edad<mayor){
        mensaje2 += `, soy menor de edad`;
    }else{
        mensaje2 += `, tengo 18`;        
}
document.write("<h2>"+mensaje2+"</h2>");

