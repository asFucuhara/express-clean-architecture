import express from 'express'
import {
  env,
  setupMiddleware,
  setupRoutes,
  setupServer,
} from '@/main/config'
import { Logger } from '@/shared/contracts'

const makeExpress = (logger: Logger) => {
  const app = express()
  setupMiddleware(app)
  setupRoutes(app)

  app.set('trust proxy', true)

  if (!env.isTest) {
    const server = app.listen(env.SERVER_PORT, () => {
      console.log(`Server running at http://localhost:${env.SERVER_PORT}`)
    })
    setupServer(server, logger)
  }

  return app
}

const appFactory = {
  express: makeExpress,
}

export { makeExpress, appFactory }
