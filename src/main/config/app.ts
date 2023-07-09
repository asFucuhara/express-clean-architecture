import { appFactory, makeLogger } from '@/main/factories'
import { env } from './index'

const Application = () => {
  return appFactory[env.FRAMEWORK](makeLogger(env.APPLICATION_NAME))
}

export {
  Application,
}
