import express from 'express'
import { UserController } from './user.controller'

const router = express.Router()

router.post('/addOrder', UserController.CreateOrderCow)
router.get('/allOrder', UserController.getAllOrders)

router.post('/signup', UserController.createUser)
router.get('/:id', UserController.getSingleUser)
router.patch('/:id', UserController.updateSingleUser)
router.delete('/:id', UserController.deleteSingleUser)
router.get('/', UserController.getAllUsers)

export const UserRoutes = {
  router,
}
