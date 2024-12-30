import express from 'express';
import  ProfileController from "../controllers/ProfileController.js";
const router =  express.Router();
router .get('/getAdminProfile',ProfileController.getAdminProfile);
export default router;