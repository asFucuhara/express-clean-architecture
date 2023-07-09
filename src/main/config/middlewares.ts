import express from 'express'
// import cookieParser from 'cookie-parser'
import { HttpContext, RequestID } from '../middlewares'
import { makeCorsMiddleware } from './cors'



const setupMiddleware = (app: express.Application) => {
  app.use(makeCorsMiddleware())
  app.use(express.json())
  // app.use(cookieParser())

  app.use(HttpContext)
  app.use(RequestID)
}

export {
  setupMiddleware,
}
