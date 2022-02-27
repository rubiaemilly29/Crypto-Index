function errorApi(err, _req, res, _next) {
    if (err.data) {
        return res.status(err.status).send({ message: err.statusText }); 
    }
   return res.status(err.status).send({ message: err.message });
}

module.exports = errorApi;
