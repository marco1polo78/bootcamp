import { Router } from "express";
import commentsController from '../controllers/comments';

const router = Router();

router
    .post('/', (req, res) => commentsController.addItem(req, res))
    .patch('/:_id', (req, res) => commentsController.updateItem(req, res))
    .delete('/:_id', (req, res) => commentsController.removeItem(req, res))

export default router;