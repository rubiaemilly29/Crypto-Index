function errorRotas(_req, res, _next) {
    res.status(404).json({ message: 'Endpoint não encontrado' });
}

module.exports = errorRotas;
