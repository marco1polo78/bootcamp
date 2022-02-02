import { Router } from 'express';
import usersController from '../controllers/users';
import { auth, toHashPassWord } from '../middleware';

const router = Router();

router
  .get(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => usersController.getItemById(req, res)
  )
  .post(
    '/',
    (req, res, next) => toHashPassWord(req, res, next),
    (req, res) => usersController.addItem(req, res)
  )
  .patch(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => usersController.updateItem(req, res)
  )
  .delete(
    '/:_id',
    (req, res, next) => auth(req, res, next),
    (req, res) => usersController.removeItem(req, res)
  )
  .post('/:login', (req, res) => usersController.login(req, res));

export default router;
