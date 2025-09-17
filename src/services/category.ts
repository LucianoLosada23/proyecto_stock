import Category from "../models/Category.model";

export class CategoryService {
    // Obtener todas las categorías
    static async getCategories() {
        try {
            const categories = await Category.findAll()
            return categories
        } catch (error) {
            throw error;
        }
    }
}