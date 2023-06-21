import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Achou'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Por enquanto não quebrou 👌 http://localhost:3333')
  })
