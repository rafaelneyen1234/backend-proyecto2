const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors=require('cors');
require('dotenv').config();

const port=process.env.PORT;


let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure:true,
  auth: {
    user: 'oneloopuni@gmail.com', // tu gmail
    pass: 'oneloopuni2023@' // tu contra
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
  


app.post('/enviarcorreo', (req, res) =>{
    console.log("entrando");
   console.log(req.body)
    let correo=req.body.correo;
    let mensaje=req.body.mensaje;
    let mailOptions = {
      from: 'oneloopuni@gmail.com',
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
app.get("", (req,res) => {
  res.send("hello OneLOop");
})


app.listen(port, () => {
    console.log(`Servidor escuchando en :${port}`);
  });

