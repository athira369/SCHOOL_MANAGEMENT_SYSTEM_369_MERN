import express from  'express';
import performanceController from  '../controllers/PerformanceController.js';

const router = express.Router();

// Teacher performance routes
router.get('/getTeacherPerformance', performanceController.getTeacherPerformance);
router.post('/addTeacherPerformance', performanceController.addTeacherPerformance);

// Student performance routes
router.get('/getStudentPerformance', performanceController.getStudentPerformance);
router.post('/addStudentPerformance', performanceController.addStudentPerformance);

export default router;          