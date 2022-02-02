import { Request, Response } from "express";
import { TagsService } from "../services/tags";

class TagsController {
    constructor(private tagsService: TagsService) {}

    public async getList(req: Request, res: Response): Promise<any> {
        try {
            const result = await this.tagsService.getList();
            res.status(200).send(...result);
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async getByTag(req: Request, res: Response): Promise<any> {
        const tag = req.query.tag;
        try {
            const result = await this.tagsService.getByTag({ tag });
            res.status(200).send(result);
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }
}

export default new TagsController(new TagsService());