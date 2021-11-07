import fastify from 'fastify';
import autoLoad from 'fastify-autoload';
import path from "path";

const { PORT = 8080 } = process.env;

const server = fastify();

server.register(autoLoad, {
    dir: path.join(__dirname, 'plugins'),
    ignorePattern: /.*test.tsx?/,
    options: server.options
});

server.register(autoLoad, {
    dir: path.join(__dirname, 'routes'),
    ignorePattern: /.*test.tsx?/,
    options: server.options,

});

server.listen(PORT, (error, address) => {
    if (error) {
        console.error(error)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
});
