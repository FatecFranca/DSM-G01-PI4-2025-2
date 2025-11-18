const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async findByEmail(email) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return null;

    // Retorna apenas os campos essenciais
    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      senha: user.senha
    };
  },

  async create(data) {
    const user = await prisma.user.create({ data });

    // Retorna apenas os campos essenciais
    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      senha: user.senha
    };
  }
};
