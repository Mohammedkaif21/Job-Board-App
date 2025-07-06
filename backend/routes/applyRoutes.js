import express from 'express'
import { createApplication } from '../controller/applyController.js';


const router = express.Router();

router.post('/apply',createApplication);

export default router;