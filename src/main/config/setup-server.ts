import { Server } from 'http'
import { Logger } from '@/shared/contracts'
import { gracefulShutdown } from '../helpers'

let connections: any[] = []

const setupServer = (server: Server, logger: Logger) => {
  server.on('connection', (connection) => {
    connections.push(connection)
    connection.on('close', () => connections = connections
      .filter((curr) => curr !== connection))
  })
  
  
  process.once('SIGUSR2', gracefulShutdown(server, connections))
  process.on('SIGTERM', gracefulShutdown(server, connections))
  process.on('SIGINT', gracefulShutdown(server, connections))
  
  // setInterval(() => server.getConnections(
  //   async (err, connections) => await logger.info(`${connections} connections currently open`),
  // ), 5000)
}

export {
  setupServer,
}
