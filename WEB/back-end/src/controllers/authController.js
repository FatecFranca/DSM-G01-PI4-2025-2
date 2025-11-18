const User = require('../model/User');

module.exports = {
  async register(req, res) {
    console.log('Dados recebidos no cadastro:', req.body);
    const { email, senha, nome } = req.body;

    const existente = await User.findByEmail(email);
    if (existente) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    const novoUsuario = await User.create({ email, senha, nome });
    res.status(201).json({ message: 'Usuário criado com sucesso' });
  },

async login(req, res) {
  const { email, senha } = req.body;

  const usuario = await User.findByEmail(email);
  if (!usuario || usuario.senha !== senha) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

req.login(usuario, (err) => {
  if (err) return res.status(500).json({ message: 'Erro ao logar' });
  return res.status(200).json({ message: 'Login bem-sucedido' });
});
}
}
