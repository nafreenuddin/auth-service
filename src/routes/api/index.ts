import { Router } from 'express';
import { checkUser } from '../../controllers/checkUser';
import { login } from '../../controllers/login';
import { register } from '../../controllers/register';

const router = Router();

router.post('/checkUser', checkUser);
router.post('/login', login);
router.post('/register', register);

export default router;
