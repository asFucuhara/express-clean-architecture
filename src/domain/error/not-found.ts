export class someError extends Error {
  public constructor() {
    super('something not found')
    this.name = 'someError'
  }
}
