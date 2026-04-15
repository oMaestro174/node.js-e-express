const logMiddleware = (req, res, next) => {

    console.log(`[${new Date().toISOString()}] Requisição ${req.method} em: ${req.url}`);

    next(); // Passa para a próxima função (ou rota)

};

export default logMiddleware;