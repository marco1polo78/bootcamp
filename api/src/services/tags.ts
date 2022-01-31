import { PostsDAO } from "../dao/posts.dao";

export class TagsService {
    private postsDao: PostsDAO = new PostsDAO();

    public async getList() {
        try {
            const result = await this.postsDao.aggragateToListTags();
            return result;
        } catch (err) {
            throw err;
        }
    }


    public async getByTag(options: any) {
        try {
            const result = await this.postsDao.aggragateByTag(options);
            return result;
        } catch (err) {
            throw err;
        }
    }
}