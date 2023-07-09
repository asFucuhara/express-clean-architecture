import { Logger } from '@/shared/contracts'

import { HttpContext } from '@/main/helpers'

class ConsoleLogAdapter implements Logger {
  constructor(protected readonly title: string) {}

  async log(level: Logger.LOG_LEVEL, description: Logger.Description, context: Logger.Context): Promise<void> {
    const requestId = HttpContext.get('REQUEST_ID')

    const log = {
      level,
      description,
      context,
      requestId,
    }

    console.log(this.title, log)
  }

  async info(description: Logger.Description, context: Logger.Context): Promise<void> {
    return await this.log(Logger.LOG_LEVEL.DEBUG, description, context)
  }

  async debug(description: Logger.Description, context: Logger.Context): Promise<void> {
    return await this.log(Logger.LOG_LEVEL.DEBUG, description, context)
  }
}

export {
  ConsoleLogAdapter,
}
