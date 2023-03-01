// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json') // <== Will be created later
// const middlewares = jsonServer.defaults()
// const port = process.env.PORT || 8000 // <== You can change the port

// server.use(middlewares)
// server.use(router)

// server.listen(port)

// JSON Server module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')

// Make sure to use the default middleware
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(router)
// Listen to port
server.listen(3000, () => {
	console.log('JSON Server is running')
})

// Export the Server API
module.exports = server