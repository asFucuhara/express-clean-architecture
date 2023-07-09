const env = {
  APPLICATION_NAME: 'ts-clean',
  FRAMEWORK: 'express',
  SERVER_PORT: process.env.PORT || 3100,
  isTest: process.env.NODE_ENV == 'test',
}

export { env }
