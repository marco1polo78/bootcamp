import { Router } from 'express';

import postRouter from './posts';
import userRouter from './users';
import commentRouter from './comments';
import tagsRouter from './tags';

const router = Router();

router.use('/posts', postRouter);
router.use('/users', userRouter);
router.use('/comments', commentRouter);
router.use('/tags', tagsRouter);

export default router;