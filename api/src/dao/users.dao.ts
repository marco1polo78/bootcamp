import { Model } from "mongoose";
import User from "../db/user";

export class UsersDAO {
    private model: Model<any> = User;

    public async getItemById(_id: string): Promise<any> {
        try {
            const user = await this.model.findById(_id, 'firstName lastName login');
            return user;
        } catch (err) {
            throw err;
        }
    }

    public async addItem(options: any): Promise<any> {
        try {
            await this.model.create(options);
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(_id: string): Promise<any> {
        try {
            const result = await this.model.deleteOne({_id});
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async updateItem(options: any): Promise<any> {
        try {
            const result = this.model.findByIdAndUpdate({_id: options._id}, options.data);
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async getUserByLogin(options: any): Promise<any> {
        const {
            login
        } = options;
        try {
            const result = await this.model.findOne({ login });
            return result;
        } catch (err) {
            throw err;
        }
    }
}