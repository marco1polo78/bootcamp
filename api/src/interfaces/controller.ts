import { Request, Response } from 'express';

export interface Controller{
    getList(req: Request, res: Response): Promise<any>,
    addItem(req: Request, res: Response): Promise<any>,
    updateItem(req: Request, res: Response): Promise<any>,
    getItemById(req: Request, res: Response): Promise<any>,
    removeItem(req: Request, res: Response): Promise<any>
}