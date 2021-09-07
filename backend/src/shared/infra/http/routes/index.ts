import { Router } from 'express';
import { authenticationRoutes } from './authentification.routes';
import { usersRoutes } from './user.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use(authenticationRoutes);

export { router };