import { Request, Response } from "express";
import { CommentsService } from "../services/comments";


class CommentsController {
    constructor(private commentsService: CommentsService) {}

    public async addItem(req: Request, res: Response): Promise<any> {
        const {
            authorId,
            postId,
            commentText
        } =  req.body;
        try {
            const options = {
                authorId,
                postId,
                commentText
            };
            await this.commentsService.addItem(options);
            res.status(200).send({
                message: 'Success'
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
            await this.commentsService.removeItem(_id);
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
        const { commentText } = req.body;
        try {
            const options = {
                _id,
                data: {
                    commentText
                }
            };
            await this.commentsService.updateItem(options);
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

export default new CommentsController(new CommentsService());