import Fastify from 'fastify'
import dotenv from 'dotenv'

dotenv.config()

const fastify = Fastify({
  logger: {
    prettyPrint:
      process.env.NODE_ENV === 'development'
        ? {
            translateTime: 'SYS:hh:MM:ss Z',
            ignore: 'pid,hostname',
          }
        : false,
  },
})

fastify.get('/ping', async function (_request, _reply) {
  return 'pong'
})

fastify.listen(process.env.PORT, function (err, _address) {
  if (err) {
    fastify.log.error('Failed to start...', err)
  }
})
