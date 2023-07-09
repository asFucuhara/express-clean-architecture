export class serverError extends Error {
  public constructor(stack: string) {
    super('Server Error')
    this.name = 'Server Error'
  }
}
