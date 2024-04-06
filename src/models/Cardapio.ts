class Menu {
  id: number
  prato: string
  imagem: string
  descricao: string

  constructor(id: number, prato: string, imagem: string, descricao: string) {
    this.id = id
    this.prato = prato
    this.imagem = imagem
    this.descricao = descricao
  }
}

export default Menu
