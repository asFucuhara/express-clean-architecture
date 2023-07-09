import debug from 'debug'

import { Logger } from '@/shared/contracts'
import { HttpContext } from '@/main/helpers'


class DebugLogAdapter implements Logger {
  protected debugInstance
  protected infoInstance
  protected errorInstance

  constructor(title: string) {
    this.debugInstance = debug(title)
    this.infoInstance = this.debugInstance.extend('info')
    this.errorInstance = this.debugInstance.extend('error')
  }

  async log(level: Logger.LOG_LEVEL, description: Logger.Description, context: Logger.Context): Promise<void> {
    const requestId = HttpContext.get('REQUEST_ID')

    const log = {
      level,
      description,
      context,
      requestId,
    }

    this.debugInstance(log)
  }

  async info(description: Logger.Description, context: Logger.Context): Promise<void> {
    return this.infoInstance(description, context ?? '')
  }

  async debug(description: Logger.Description, context: Logger.Context): Promise<void> {
    return this.infoInstance(description, context ?? '')
  }

  async error(description: Logger.Description, context: Logger.Context): Promise<void> {
    return this.errorInstance(description, context ?? '')
  }
}

export {
  DebugLogAdapter,
}
