import { Logger } from '@/shared/contracts'
import { ConsoleLogAdapter } from '@/main/adapters/logger'

const makeLogger = (title?: string): Logger => new ConsoleLogAdapter(title || '')

const logger = makeLogger()

export {
  logger,
  makeLogger,
}
