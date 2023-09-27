nodemailer

npm init
npm install nodemailer


const nodemailer = require('nodemailer');

// Configura el transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Cambia esto según tu proveedor de correo electrónico
  auth: {
    user: 'jg24902@gmail.com', // Tu dirección de correo electrónico
    pass: 'Monica2023' // Tu contraseña de correo electrónico
  }
});

// Función para enviar el correo
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: 'jg24902@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo electrónico:', error);
    } else {
      console.log('Correo electrónico enviado con éxito:', info.response);
    }
  });
}

module.exports = sendEmail;


const sendEmail = require('./sendEmail'); // Importa la función sendEmail

const emailForm = document.getElementById('emailForm');

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const recipient = document.getElementById('recipient').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  sendEmail(recipient, subject, message);
  
  // Puedes agregar código adicional aquí para mostrar un mensaje de éxito al usuario.
});





