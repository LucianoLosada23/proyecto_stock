import type { Request, Response } from "express";
import { CategoryService } from "../services/category";

export class CategoryController {
  //GET ALL --> Obtener todas las categorías
  static async getCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryService.getCategories();
      return res.status(200).json({
        message: "Obtener categorías con éxito",
        data: categories,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //POST --> Crear una nueva categoría
  static async createCategory(req: Request, res: Response) {
    try {
      const data = req.body;
      const newCategory = await CategoryService.createCategory(data)
      return res.status(201).json({
        message: "Crear categoría con éxito",
        data: newCategory,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
