import { Request, Response } from 'express'

import { HttpController, HttpRequest } from '@/presentation/contracts'
import { serverError } from '@/presentation/helpers'

import { logger } from '@/main/factories'
import { Logger } from '@/shared/contracts'

export default (controller: HttpController) =>
  async (req: Request, res: Response) => {
    const getUser = (user: any) => {
      if (!user) return undefined
      return { id: user.sub, ...user }
    }

    logger.info('Requested', [req.body, req.params, req.query])

    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      ip: req.ip,
      userAgent: req.headers['user-agent'],
    }

    try {
      const httpResponse = await controller.handle(httpRequest)

      res.status(httpResponse.statusCode).json(httpResponse.body)
    } catch (Err) {
      logger.log(Logger.LOG_LEVEL.ERROR, Err)
      const httpResponse = serverError(Err)
      res.status(Err).json(httpResponse.body)
    }
  }
