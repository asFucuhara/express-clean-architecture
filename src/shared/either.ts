//todo fix this its inverted

export interface Either<L, A> {
  isLeft(): Boolean
  isRight(): Boolean
  value: any
}

export class Left<L, A> implements Either<L,A> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isLeft(): Boolean {
    return true
  }

  isRight(): Boolean {
    return false
  }
}

export class Right<L, A> implements Either<L,A> {
  readonly value: A

  constructor(value: A) {
    this.value = value
  }

  isLeft(): Boolean {
    return false
  }

  isRight(): Boolean {
    return true
  }
}

export const left = <L, A>(l: L): Either<L, A> => new Left<L, A>(l)

export const right = <L, A>(a: A): Either<L, A> => new Right<L, A>(a)
