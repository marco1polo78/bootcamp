import { CommentsDAO } from "../dao/comments.dao";
import { PostsDAO } from "../dao/posts.dao";
import { IPost } from "../interfaces/post";

export class PostsService {
    private postsDao: PostsDAO = new PostsDAO();
    private commentsDao: CommentsDAO = new CommentsDAO();

    public async getList(options: any): Promise<any> {
        try {
            const posts = await this.postsDao.getList(options);
            return posts;
        } catch (err) {
            throw err;
        }
    }

    public async addItem(options: IPost): Promise<any> {
        try {
            await this.postsDao.addItem(options);
        } catch (err) {
            throw err;
        }
    }

    public async updateItem(options: any): Promise<any> {
        try {
            await this.postsDao.updateItem(options);
        } catch (err) {
            throw err;
        }
    }

    public async getItemById(_id: string): Promise<any> {
        try {
            const post = await this.postsDao.getItemById(_id);
            return post;
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(_id: string): Promise<any> {
        try {
            const removedPosts = await this.postsDao.removeItem(_id);
            await this.commentsDao.removeManyItemsById(removedPosts.comments);
        } catch (err) {
            throw err;
        }
    }
}