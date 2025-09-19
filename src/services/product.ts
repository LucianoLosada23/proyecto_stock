import Product from "../models/Product.model";

export class ProductService {
  // Obtener todos los productos}
  static async getProducts() {
    try {
      const products = await Product.findAll();
      return products;
    } catch (error) {
      throw error;
    }
  }

  // Crear un nuevo producto
  static async createProduct(data) {
    try {
      const product = await Product.create(data);
      return product;
    } catch (error) {
      throw error;
    }
  }

  // Eliminar un producto por ID
  static async deleteProduct(id) {
    try {
        const product = await Product.findByPk(id)
        await product.destroy()
        return product;
    } catch (error) {
      throw error;
    }
  }
}
