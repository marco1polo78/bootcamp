import { Router } from "express";
import tagsController from '../controllers/tags';

const router = Router();

router
    .get('/list', (req, res) => tagsController.getList(req, res))
    .get('/', (req, res) => tagsController.getByTag(req, res));

export default router;