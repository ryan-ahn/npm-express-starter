import { Router } from 'express';
import sampleRoutes from './sampleRoutes';

const router: Router = Router();

router.use('/v1/sample', sampleRoutes);

export default router;
