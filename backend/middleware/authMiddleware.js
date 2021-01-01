import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401);
    throw new Error('You are not authorized to access this page');
  } else {
    const [type, credentials] = req.headers.authorization.split(' ');
    if (type === 'Bearer') {
      try {
        const decoded = jwt.verify(credentials, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
      } catch (error) {
        console.error(error);
        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    }
  }
});

export { protect };
