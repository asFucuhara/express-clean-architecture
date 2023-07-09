export class missingParamError extends Error {
  public constructor(paramName: string) {
    super('Missing param:' + paramName)
    this.name = 'Missing params'
  }
}
