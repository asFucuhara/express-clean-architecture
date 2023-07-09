import cors from 'cors'
// import { env } from '@/main/config/env'

export const makeCorsMiddleware = () => cors()
// const whitelist = env.CORS_HOSTNAME.split(',')
// {
//   origin: (origin, callback) => {
//     if (origin === undefined || whitelist.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   methods: ['POST', 'PUT', 'GET', 'DELETE', 'OPTIONS', 'HEAD'],
//   credentials: true,
// }
