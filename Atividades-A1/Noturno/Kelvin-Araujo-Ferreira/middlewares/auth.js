const TOKEN = 'seutokenjedi123'; // Troque para outro valor se quiser

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (token === TOKEN) {
    next();
  } else {
    res.status(401).json({ error: 'Token ausente ou inválido' });
  }
};