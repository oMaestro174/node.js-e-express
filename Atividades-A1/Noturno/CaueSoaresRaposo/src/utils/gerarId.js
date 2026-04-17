function gerarId(lista) {
  if (lista.length === 0) {
    return 1;
  }

  const ultimoItem = lista[lista.length - 1];
  return ultimoItem.id + 1;
}

module.exports = gerarId;