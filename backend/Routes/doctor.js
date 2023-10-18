import express from 'express'
import { updateDoctor, 
    deleteDoctor, 
    getAllDoctor, 
    getSingleDoctor,
 } from '../Controllers/doctorController.js'

import { authenticate, restrict } from '../auth/verifyToken.js'

import  reviewRouter from './review.js';




const router= express.Router()

//nested router - allow to associate certain reviews with different doctors 
router.use("/:doctorId/review", reviewRouter);
router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id',authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id',authenticate, restrict(['doctor']), deleteDoctor)


export default router;