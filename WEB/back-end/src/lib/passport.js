const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const email = profile.emails[0].value;

    // Verifica se o usuário já existe no banco
    let usuario = await prisma.user.findUnique({ where: { email } });

    // Se não existir, cria
    if (!usuario) {
      usuario = await prisma.user.create({
        data: {
          nome: profile.displayName,
          email: email,
        }
      });
    }

    // Retorna o usuário salvo no banco
    return done(null, usuario);
  } catch (err) {
    return done(err);
  }
}));

// Serializa apenas o ID do usuário salvo no banco
passport.serializeUser((user, done) => {
  const id = typeof user === 'object' && user.id ? user.id : user;
  console.log('Serializando ID:', id);
  done(null, id);
});


// Desserializa buscando o usuário pelo ID
passport.deserializeUser(async (id, done) => {
  console.log('Desserializando ID:', id); // ✅ deve ser uma string
  try {
    const usuario = await prisma.user.findUnique({ where: { id } });
    done(null, usuario);
  } catch (err) {
    done(err);
  }
});



module.exports = passport; // ✅ exporta o objeto correto