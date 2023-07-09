import { HttpResponse, StatusCode } from '@/presentation/contracts'
import { Either } from '@/shared'

export const response = (
  body: any,
  statusCode: StatusCode,
  cookie?: [string, string, Record<string, any>],
  clearCookieKey?: string,
): HttpResponse => ({
  body,
  statusCode,
  cookie,
  clearCookieKey,
})

export const created = (body: any): HttpResponse =>
  response(body, StatusCode.STATUS_CREATED)

export const success = (body: any): HttpResponse =>
  response(body, StatusCode.STATUS_SUCCESS)

export const serverError = (body: any): HttpResponse =>
  response(body, StatusCode.STATUS_INTERNAL_ERROR)

export const badRequest = (body: any): HttpResponse =>
  response(body, StatusCode.STATUS_BAD_REQUEST)

export const unauthorized = (body: any): HttpResponse =>
  response(body, StatusCode.STATUS_UNAUTHORIZED)

export const setJwtCookie = (jwt: string, body: any, options: any): HttpResponse =>
  response(body, StatusCode.STATUS_SUCCESS, ['jwt', jwt, options])

export const clearCookie = (key: string): HttpResponse =>
  response('', StatusCode.STATUS_SUCCESS, undefined, key)

export const notFound = (body: any): HttpResponse =>
  response(body, StatusCode.STATUS_NOT_FOUND)

export const eitherResponse = <L, A>(data: Either<L, A>): HttpResponse =>
  data.isLeft() ? success(data.value) : badRequest(data.value.message)
