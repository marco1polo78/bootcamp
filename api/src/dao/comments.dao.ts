import { Model } from "mongoose";
import Comment from "../db/comments";

export class CommentsDAO {
    private model: Model<any> = Comment;

    public async addItem(options: any): Promise<any> {
        try {
            const result = await this.model.create(options);
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(_id: string): Promise<any> {
        try {
             const result = await this.model.findByIdAndRemove({_id});
             return result;
        } catch (err) {
            throw err;
        }
    }

    public async updateItem(options: any): Promise<any> {
        try {
            await this.model.findByIdAndUpdate({_id: options._id}, options.data);
        } catch (err) {
            throw err;
        }
    }

    public async removeManyItemsById(options: any): Promise<any> {
        try {
            await this.model.deleteMany({_id: { $in: options } });
        } catch (err) {
            throw err;
        }
    }
}