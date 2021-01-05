import express from 'express';
const router = express.Router();
import {
  getProduct,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProduct);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct);

export default router;
