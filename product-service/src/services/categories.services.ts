import { CategoryModel, ProductModel, UserModel } from "../database/models"

class CategoriesService {

    constructor() {
    }

    async fetchCategories(id: any) {
        try {
            let data = await CategoryModel.find({ parentId: id })
            return data;

        } catch (e) {
            return e;
        }
    }

}

export const categoryService = new CategoriesService()