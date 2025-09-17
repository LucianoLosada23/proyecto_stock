import type { Request, Response } from "express";
import { CategoryService } from "../services/category";

//GET ALL --> Obtener todas las categorías
export class CategoryController {
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
}
