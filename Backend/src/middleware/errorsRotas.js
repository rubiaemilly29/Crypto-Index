function errorRotas(_req, res, _next) {
    res.status(404).json({ message: 'Erro ao acessar a rota' });
}

module.exports = errorRotas;
