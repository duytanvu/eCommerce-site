import express from 'express';
const router = express.Router();
import {
  getProduct,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProduct).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
