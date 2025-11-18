document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('password').value;

  try {
    const response = await fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
    credentials: 'include' // ✅ garante que os cookies de sessão sejam enviados
    });


    const data = await response.json();

    if (response.ok) {
      alert(data.message || 'Login realizado com sucesso!');
      window.location.href = '/sensores'; // ✅ redireciona após login
    } else {
      alert(data.message || 'Erro ao fazer login');
    }
  } catch (err) {
    console.error('Erro na requisição:', err);
    alert('Erro de conexão com o servidor');
  }
});
