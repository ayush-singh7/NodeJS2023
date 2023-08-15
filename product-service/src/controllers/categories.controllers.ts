import { Router, Request, Response } from 'express';
import { categoryService } from '../services/categories.services';


class CategoriesControllers {

    constructor() {
    }

    async fetchCategories(req: Request, res: Response) {
        try {
            let { parentId } = req.query;

            let data = await categoryService.fetchCategories(parentId);
            res.send(data);

        } catch (e) {
            res.send(e)
        }

    }

}

export const categoriesControllers = new CategoriesControllers()