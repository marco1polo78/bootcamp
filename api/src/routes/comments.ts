import { Router } from 'express';
import commentsController from '../controllers/comments';
import { auth } from '../middleware';

const router = Router();

router
  .post(
    '/',
    (req, res, next) => auth(req, res, next),
    (req, res) => commentsController.addItem(req, res)
  )
  .patch(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => commentsController.updateItem(req, res)
  )
  .delete(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => commentsController.removeItem(req, res)
  );

export default router;
