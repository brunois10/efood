class Restaurante {
  id: number
  prato: string
  imagem: string
  descricao: string
  destaque: string
  culinaria: string
  nota: string

  constructor(
    id: number,
    prato: string,
    imagem: string,
    descricao: string,
    destaque: string,
    culinaria: string,
    nota: string,
  ) {
    this.id = id
    this.prato = prato
    this.imagem = imagem
    this.descricao = descricao
    this.destaque = destaque
    this.culinaria = culinaria
    this.nota = nota
  }
}

export default Restaurante
