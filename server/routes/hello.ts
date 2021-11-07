import {FastifyInstance} from "fastify";

export default async function HelloRoutes(server: FastifyInstance) {
    server.get('/hello', async (request, reply) => {
        reply.send({
            Hello: 'World'
        })
    })
}
