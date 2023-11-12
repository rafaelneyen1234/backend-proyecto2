const email=(req, res) =>{
    console.log("entrando");
    let correo=req.query.correo;
    let mensaje=req.query.mensaje;
    let mailOptions = {
      from: 'jacoborosseau@gmail.com',
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
  }
module.exports=email;