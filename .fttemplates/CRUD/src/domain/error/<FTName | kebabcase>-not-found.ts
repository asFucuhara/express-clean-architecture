export class <FTName | pascalcase>NotFound extends Error {
  public constructor() {
    super('<FTName> nao  encontrado')
    this.name = '<FTName | pascalcase>NotFound'
  }
}
