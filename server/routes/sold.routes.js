import express from 'express';

import {
  createSold
} from '../controllers/sold.controller.js'

const router = express.Router();


router.route('/').post(createSold);


export default router;