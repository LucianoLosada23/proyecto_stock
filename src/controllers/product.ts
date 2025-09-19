import { Request, Response } from "express";
import { ProductService } from "../services/product";

export class ProductController {
  // GET --> Obtener todos los productos
  static async getProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getProducts();
      return res.status(200).json({
        message: "Productos obtenidos con éxito",
        data: products,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // POST --> Crear un nuevo producto
  static async createProduct(req: Request, res: Response) {
    try {
      const data = req.body;
      const newProduct = await ProductService.createProduct(data);
      return res.status(201).json({
        message: "Producto creado con éxito",
        data: newProduct,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // DELETE --> Eliminar un producto por ID
  static async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const Product = await ProductService.deleteProduct(id);
      return res.status(200).json({
        message: "Producto eliminado con éxito",
        data: Product,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
