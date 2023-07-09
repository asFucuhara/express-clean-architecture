import { Application, setupDatabase } from './config'


(async () => {
  await setupDatabase()
  Application()
})()
