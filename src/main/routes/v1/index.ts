import { Router } from 'express'

import userRoute from './generic'


const router = Router()

userRoute(router)

export default router
