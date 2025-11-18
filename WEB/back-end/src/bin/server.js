const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ✅ Carrega variáveis do .env na raiz
const session = require('express-session');
const MongoStore = require('connect-mongo'); // ✅ Salva sessões no MongoDB Atlas
const passport = require('../lib/passport');
const authRoutes = require('../routes/authRoutes');
const googleAuthRoutes = require('../routes/googleAuth');
const path = require('path');
const enviarEmail = require('../lib/enviarEmail');


const app = express();

// Middlewares básicos
app.use(cors());
app.use(express.json());

// Sessão com armazenamento no MongoDB Atlas
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
  cookie: {
    httpOnly: true,
    secure: false, // ✅ coloque true se estiver em HTTPS
    maxAge: 1000 * 60 * 60 * 24 // 1 dia
  }
}));


// Inicializa Passport
app.use(passport.initialize());
app.use(passport.session());

// Rotas de autenticação
app.use('/auth', authRoutes);
app.use('/auth', googleAuthRoutes);

// Arquivos estáticos (depois das rotas para evitar conflitos)
app.use(express.static(path.resolve(__dirname, '../view/public')));

// Conexão com MongoDB Atlas
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro ao conectar MongoDB:', err));

// Rotas públicas
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../view/public/pages/index.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../view/public/pages/cadastro.html'));
});

app.get('/recuperar_senha', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../view/public/pages/recuperar_senha.html'));
});

// Middleware de proteção de rota
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
}

// Rota protegida
app.get('/sensores', ensureAuthenticated, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../view/public/pages/sensores.html'));
});

app.post('/api/enviar-codigo', async (req, res) => {
  const { email } = req.body;
  console.log('Requisição recebida para:', email); // ✅

  const codigo = Math.floor(100000 + Math.random() * 900000);

  try {
    await enviarEmail(email, `Seu código de recuperação é: ${codigo}`);
    res.json({ sucesso: true });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error); // ✅
    res.status(500).json({ sucesso: false, mensagem: 'Erro ao enviar e-mail.' });
  }
});




// Inicializa servidor
const PORT = process.env.PORT || 3000;
const umidadeRoutes = require('../routes/umidade.js');
app.use('/api/umidade', umidadeRoutes);
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
