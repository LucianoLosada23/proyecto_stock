import type { Request , Response } from "express";
import { CompanyService } from "../services/company";
// req = cliente --> servidor
// res = servidor -- cliente

export class CompanyController {

    //GET ALL --> Obtener todas las compañías
    static async getCompanies(req : Request , res : Response){
        try {
            const companies = await CompanyService.getCompanies();
            return res.status(200).json({
                message: "Obtener empresas con éxito",
                data : companies
            })
        } catch (error) {
            console.log(error);
        }
    }

    //GET BY ID

    //POST --> Crear una nueva compañía
    static async createCompany(req : Request , res : Response) {
        try {
            const data = req.body
            const newCompany = await CompanyService.createCompany(data);
            return res.status(201).json({
                message: "Empresa creada con éxito",
                data: newCompany,
            });
        } catch (error) {
            console.log(error);
        }
    }

    //PUT

    //DELETE
    static async deleteCompany(req : Request , res : Response){
        try {
            const {id} = req.params
            const Company = await CompanyService.deleteCompany(id);            
            return res.status(201).json({
                message: "Empresa eliminada con éxito",
                data: Company,
            });
            
        } catch (error) {
            console.log(error);
        }
    }

}