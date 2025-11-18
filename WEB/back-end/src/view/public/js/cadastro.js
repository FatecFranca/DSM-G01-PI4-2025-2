document.getElementById('cadastroForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const nome = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('password').value;
  const confirmar = document.getElementById('confirm').value;

  if (!nome || !email || !senha || !confirmar) {
    alert('Preencha todos os campos');
    return;
  }

  if (senha !== confirmar) {
    alert('As senhas não coincidem');
    return;
  }

  try {
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha, nome })
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message || 'Cadastro realizado com sucesso!');
      window.location.href = '/';
    } else {
      alert(data.message || 'Erro ao cadastrar');
    }
  } catch (err) {
    console.error('Erro na requisição:', err);
    alert('Erro de conexão com o servidor');
  }
});
