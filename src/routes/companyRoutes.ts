import {Router} from "express"
import { handleInputErrors } from "../middleware/validations"
import { CompanyController } from "../controllers/company"

const router = Router()


// GET
router.get("/" ,
    CompanyController.getCompanies
)

// POST 
router.post("/" ,
    handleInputErrors,
    CompanyController.createCompany
)


export default router