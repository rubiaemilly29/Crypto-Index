function errorApi(err, _req, res, _next) {
    console.log(err);
   return res.status(err.status)
    .send({ message: `Erro no inesperado, tente novamente mais tarde. (${err.data})` });
}

module.exports = errorApi;
