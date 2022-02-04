import bcrypt from 'bcrypt';
import { sign } from "jsonwebtoken";
import { UsersDAO } from "../dao/users.dao";

export class UsersService {
    private usersDao: UsersDAO = new UsersDAO();

    public async getItemById(_id: string): Promise<any> {
        try {
            const post = await this.usersDao.getItemById(_id);
            return post;
        } catch (err) {
            throw err;
        }
    }

    public async addItem(options: any): Promise<any> {
        try {
            await this.usersDao.addItem(options);
        } catch (err) {
            throw err;
        }
    }

    public async removeItem(_id: string): Promise<any> {
        try {
            await this.usersDao.removeItem(_id);
        } catch (err) {
            throw err;
        }
    }

    public async updateItem(options: any): Promise<any> {
        try {
            await this.usersDao.updateItem(options);
        } catch (err) {
            throw err;
        }
    }

    public async login(options: any): Promise<any> {
        const {
            login,
            password
        } = options;
        try {
            const user = await this.usersDao.getUserByLogin({login});
            if (!user) {
                return {
                    status: 500,
                    data: "Incorrect login or password"
                };
            }
            if (bcrypt.compareSync(password, user.password)) {
                const token = sign({login, _id: user._id}, 'secret');
                return {
                    token: token
                };
            } else {
                return {
                    status: 500,
                    data: "Incorrect login or password"
                };
            }
        } catch (err) {
            throw err;
        }
    }
}