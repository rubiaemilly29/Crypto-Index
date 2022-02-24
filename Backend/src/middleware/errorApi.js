function errorApi(err, _req, res, _next) {
    console.log(err, 'estou no errorApi');
    if (err.data) {
        return res.status(err.status).send({ message: err.data }); 
    }
   return res.status(err.status).send({ message: err.message });
}

module.exports = errorApi;
