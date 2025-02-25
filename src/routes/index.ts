import { Router } from 'express'

import { productsRoutes } from './products.routes'
import { sessionsRoutes } from './sessions.routes'

const routes = Router()
routes.use('/sessions', sessionsRoutes)
routes.use('/products', productsRoutes)

export { routes }
