/* Create Express Router */
import express from 'express'
const router = express.Router()

import userModule from './modules/user'
router.use('/users', userModule)

import productApi from './modules/product.api';
router.use('/products', productApi)

import purchaseApi from './modules/purchase.api';
router.use('/purchase', purchaseApi)

export default router;