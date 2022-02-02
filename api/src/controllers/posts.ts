import { Request, Response } from "express";
import { PostsService } from "../services/posts";


class PostsController {
    constructor (public postsService: PostsService) {}

    public async getList(req: Request, res: Response) {
        const tags = req.query.tags as string;
        try {
            const options = {
                tags
            };
            const result = await this.postsService.getList(options);
            res.status(200).send(result);
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async addItem(req: Request, res: Response): Promise<any> {
        const authorId = req.body.requester._id;
        const {
            datePost,
            title,
            description,
            textarea,
            tags
        } = req.body;
        try {
            const options = {
                authorId,
                datePost,
                title,
                description,
                textarea,
                tags
            };
            await this.postsService.addItem(options);
            res.status(200).send({
                message: 'Success'
            });
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async updateItem(req: Request, res: Response): Promise<any> {
        const { _id } = req.params;
        const {
            title,
            description,
            textarea
        } = req.body;
        try {
            const options = {
                _id,
                data: {
                    title,
                    description,
                    textarea
                }
            };
            await this.postsService.updateItem(options);
            res.status(200).send({
                message: 'Success'
            });
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async getItemById(req: Request, res: Response): Promise<any> {
        const { _id } = req.params;
        try {
            const post = await this.postsService.getItemById(_id);
            res.status(200).send({
                data: post
            });
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async removeItem(req: Request, res: Response): Promise<any> {
        const { _id } = req.params;
        try {
            await this.postsService.removeItem(_id);
            res.status(200).send({
                message: 'Success'
            });
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }
}

export default new PostsController(new PostsService());