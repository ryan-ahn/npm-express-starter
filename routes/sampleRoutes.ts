import { Router } from 'express';
import { sampleControllers } from '../controllers';

const router: Router = Router();

router.post('/', sampleControllers.sampleController);

module.exports = router;

export default router;
