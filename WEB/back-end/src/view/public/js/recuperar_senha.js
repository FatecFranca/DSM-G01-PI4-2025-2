document.getElementById('recuperarForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;

  // Simulação de envio para backend
  fetch('/api/enviar-codigo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
    if (data.sucesso) {
      document.getElementById('mensagem').textContent = 'Código enviado para seu e-mail!';
    } else {
      document.getElementById('mensagem').textContent = 'E-mail não encontrado.';
    }
  })
  .catch(error => {
    document.getElementById('mensagem').textContent = 'Erro ao enviar código.';
    console.error(error);
  });
});
