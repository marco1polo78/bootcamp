import { Router } from 'express';
import postsController from '../controllers/posts';
import { auth } from '../middleware';

const router = Router();

router
  .get('/', (req, res) => postsController.getList(req, res))
  .post(
    '/',
    (req, res, next) => auth(req, res, next),
    (req, res) => postsController.addItem(req, res)
  )
  .patch(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => postsController.updateItem(req, res)
  )
  .get('/:_id', (req, res) => postsController.getItemById(req, res))
  .delete(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => postsController.removeItem(req, res)
  );

export default router;
