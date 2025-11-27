const User = require('../model/User');

module.exports = {
  async register(req, res) {
    console.log('Dados recebidos no cadastro:', req.body);
    const { email, senha, nome } = req.body;

    const existente = await User.findByEmail(email);
    if (existente) {
      return res.status(400).json({ success: false, message: 'Email já cadastrado' });
    }

    const novoUsuario = await User.create({ email, senha, nome });

    return res.status(201).json({
      success: true,
      message: 'Usuário criado com sucesso',
      usuario: {
        id: novoUsuario.id,
        email: novoUsuario.email,
        nome: novoUsuario.nome
      }
    });
  },

  async login(req, res) {
    const { email, senha } = req.body;

    const usuario = await User.findByEmail(email);
    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }

    return res.status(200).json({
      success: true,
      message: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome
      }
    });
  }
};
