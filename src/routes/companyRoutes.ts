import {Router} from "express"
import { body , param } from "express-validator"
import { handleInputErrors } from "../middleware/validations"
import { CompanyController } from "../controllers/company"

const router = Router()


// GET
router.get("/" ,
    handleInputErrors,
    CompanyController.getCompanies
)

// POST 
router.post("/" ,
    handleInputErrors,
    CompanyController.createCompany
)


export default router