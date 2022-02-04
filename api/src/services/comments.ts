import { CommentsDAO } from "../dao/comments.dao";
import { PostsDAO } from "../dao/posts.dao";


export class CommentsService {
    private commentsDao: CommentsDAO = new CommentsDAO();
    private postsDao: PostsDAO = new PostsDAO();

    public async addItem(options: any): Promise<any> {
        try {
            const comment = await this.commentsDao.addItem(options);
            await this.postsDao.updateItem({
                _id: comment.postId,
                data: { $push: { comments: comment._id }}
            });
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(_id: string): Promise<any> {
        try {
            const removedComment = await this.commentsDao.removeItem(_id);
            await this.postsDao.updateItem({
                _id: removedComment.postId,
                data: { $pull: { comments: removedComment._id }}
            }); 
        } catch (err) {
            throw err;
        }
    }

    public async updateItem(options: any): Promise<any> {
        try {
            await this.commentsDao.updateItem(options);
        } catch (err) {
            throw err;
        }
    }
}