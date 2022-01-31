import { Request, Response } from "express";
import { UsersService } from "../services/users";

class UsersController {
    constructor(private usersService: UsersService) {}

    public async getItemById(req: Request, res: Response): Promise<any> {
        const { _id } = req.params;
        console.log(_id);
        try {
            const result = await this.usersService.getItemById(_id);
            res.status(200).send({
                data: result
            });
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async addItem(req: Request, res: Response): Promise<any> {
        const {
            login,
            password,
            firstName,
            lastName
        } = req.body;
        try {
            const options = {
                login,
                password,
                firstName,
                lastName
            };
            await this.usersService.addItem(options);
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
            await this.usersService.removeItem(_id);
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
            password,
            firstName,
            lastName
        } = req.body;
        try {
            const options = {
                _id,
                data: {
                    password,
                    firstName,
                    lastName
                }
            };
            await this.usersService.updateItem(options);
            res.status(200).send({
                message: 'Success'
            }); 
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }

    public async login(req: Request, res: Response): Promise<any> {
        const {
            password,
            login
        } = req.body;
        try {
            const options = {
                login,
                password
            };
            const result = await this.usersService.login(options);
            res.status(200).send({
                data: result
            });
        } catch (err) {
            res.status(500).send({
                error: JSON.stringify(err) || 'Something went wrong.'
            });
        }
    }
}

export default new UsersController(new UsersService());