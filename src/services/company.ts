import Company from "../models/Company.model";

export class CompanyService {
  // Obtener todas las compañías
  static async getCompanies() {
    try {
      const company = await Company.findAll();
      return company;
    } catch (error) {
      throw error;
    }
  }

  //data: InferCreationAttributes<Company>
  // Crear una nueva compañía
  static async createCompany(data) {
    try {
      const company = await Company.create(data);
      return company;
    } catch (error) {
      throw error;
    }
  }

  // Eliminar una compañía por ID
  static async deleteCompany(id) {
    try {
      const company = await Company.findByPk(id);
      await company.destroy();
      return company;
    } catch (error) {
      throw error;
    }
  }
}
