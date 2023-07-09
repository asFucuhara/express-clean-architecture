export enum StatusCode {
  STATUS_SUCCESS = 200,
  STATUS_CREATED = 201,
  STATUS_INTERNAL_ERROR = 500,
  STATUS_BAD_REQUEST = 400,
  STATUS_NOT_FOUND = 404,
  STATUS_UNAUTHORIZED = 401,
}

export interface HttpResponse {
  statusCode: StatusCode;
  body: any;
}


export interface HttpRequest {
  body?: any;
  params?: any;
  query?: any;
  ip: string;
  userAgent: string | undefined;
}
