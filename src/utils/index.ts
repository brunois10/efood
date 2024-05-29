export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(amount)
}

export const getTotalPrice = (items: CardapioType[]) => {
  const total = items.reduce((acumulator: number, currentPrice) => {
    if (currentPrice.preco) {
      return acumulator + currentPrice.preco
    }
    return acumulator
  }, 0)

  return Number(total.toFixed(2))
}
