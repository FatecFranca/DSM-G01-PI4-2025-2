const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  const { umidade, bomba, tempo, volume } = req.body;

  try {
    // Gera horário local de Brasília
    const dataBrasilia = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
    );

    const registro = await prisma.umidade.create({
      data: {
        valor: umidade,
        bombaLigada: bomba,
        tempo,
        volume,
        criadoEm: dataBrasilia, // sobrescreve o @default(now()) com horário ajustado
      },
    });

    res.status(201).json(registro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao salvar dados' });
  }
});

module.exports = router;
