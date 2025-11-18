const nodemailer = require('nodemailer');

async function enviarEmail(destinatario, mensagem) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // TLS na porta 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: destinatario,
    subject: 'Recuperação de senha',
    text: mensagem
  };

  return transporter.sendMail(mailOptions)
    .then(info => {
      console.log('E-mail enviado:', info);
      return info;
    })
    .catch(err => {
      console.error('Erro ao enviar e-mail:', err);
      throw err;
    });
}

module.exports = enviarEmail;
