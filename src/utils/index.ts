export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(preco)
}

export const getTotalPrice = (items: CardapioType[]) => {
  const total = items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return accumulator + currentItem.preco
    }
    return accumulator
  }, 0)
  return total.toFixed(2)
}
