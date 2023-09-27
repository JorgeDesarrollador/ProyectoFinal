
momentoActual = new Date()

function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible }
setTimeout("mueveReloj()",1000)



document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.getElementById('emailForm');
    const mensaje = document.getElementById('mensaje');

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const emailAddress = emailInput.value;

        // Envía la dirección de correo electrónico al servidor (no incluido en este ejemplo).

        // Muestra un mensaje de confirmación al usuario.
        mensaje.innerHTML = `¡Te has suscrito con éxito a nuestro boletín!`;
        
        // Limpia el campo de entrada.
        emailInput.value = '';
    });
});
/*En este ejemplo, cuando el usuario envía el formulario, el evento submit se cancela para evitar que la página se recargue. Luego, se obtiene el valor del campo de entrada de correo electrónico y se puede enviar al servidor para su procesamiento real.

Ten en cuenta que este ejemplo solo se encarga de la parte frontend de la suscripción por correo electrónico. Debes implementar la lógica del servidor (backend) para procesar y enviar los correos electrónicos.

Asegúrate de tener un servidor backend configurado para manejar la lógica de suscripción y envío de correos electrónicos de manera segura y eficiente. Esto incluirá la validación de correos electrónicos, el almacenamiento de direcciones de correo electrónico suscritas y el envío real de correos electrónicos cuando corresponda. */

/*let pc1= {nombre: "jorge", procesador: "intel", Ram: "16GB", espacio: "1tb"};

 let nombre= pc1["nombre"];
let procesador= pc1["procesador"];
let Ram= pc1["Ram"];
let espacio= pc1["espacio"];

frase=` el nombre de mi pc es: ${nombre} <Br>   
        el procesador es: ${procesador} <Br>
        la memoria es: ${Ram} <Br>
        el espacio es: ${espacio} <Br> ` ; 
 

document.write(frase);
function saludar() 
{ respuesta = prompt( "Hola , como te fué en tu día"); 

if (respuesta == "bien") {
    alert ( " me alegro")}  
else {
    alert(" una pena")
}
}

saludar()*/























