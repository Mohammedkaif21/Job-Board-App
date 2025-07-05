import express from 'express'
import { createJobs, getAllJobs, getJobById } from '../controller/jobController.js';

const router = express.Router();

router.post('/',createJobs);
router.get('/',getAllJobs);
router.get('/:id',getJobById);

export default router;