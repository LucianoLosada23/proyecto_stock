import { Router } from "express";
import { handleInputErrors } from "../middleware/validations";
import { CategoryController } from "../controllers/category";

const router = Router()

// GET  
router.get("/" ,  
    handleInputErrors,
    CategoryController.getCategories
)

router.post("/" , 
    handleInputErrors,
)

export default router