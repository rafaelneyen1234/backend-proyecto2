const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors=require('cors');
require('dotenv').config();
const port=process.env.PORT;
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jacoborosseau@gmail.com', // tu gmail
    pass: 'Toscano199' // tu contra
  }
});

  app.use(cors());
  
app.get('/enviarcorreo', (req, res) =>{
    console.log("entrando");
    let correo=req.query.correo;
    let mensaje=req.query.mensaje;
    let mailOptions = {
      from: 'neil.toscano.f@uni.pe',
      to: correo,
      subject: 'Curso de Robotica Industrial',
      text: mensaje,
    };
    res.send('Hello World');
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Correo electrónico enviado: ' + info.response);
      }
    });
  });

app.listen(port, () => {
    console.log(`Servidor escuchando en :${port}`);
  });

