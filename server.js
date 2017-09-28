const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const pathMatch = require('path-match')

const dev = process.env.NODE_ENV !== 'production'
const port = parseInt(process.env.PORT, 10) || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

const customRoutes = require('./custom-routes')

// Custom route definitions

Object.keys(customRoutes).forEach(route => {
  let info = customRoutes[route]
  info.match = pathMatch()(route)
})

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    // Match the pathname against the route definitions
    const matchingRoute = Object.keys(customRoutes).find(route => {
      const info = customRoutes[route]
      info.params = info.match(pathname)
      return info.params !== false
    })

    // Either use the matching route or handle it as a regular route
    if (matchingRoute !== undefined) {
      const info = customRoutes[matchingRoute]
      const params = Object.assign(info.params, query)
      app.render(req, res, `/${info.page}`, params)
    } else {
      handle(req, res)
      return
    }
  }).listen(port, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
