import { Router } from "express";
import { handleInputErrors } from "../middleware/validations";
import { CategoryController } from "../controllers/category";

const router = Router()

// GET  
router.get("/" ,  
    CategoryController.getCategories
)

// POST
router.post("/" , 
    handleInputErrors,
    CategoryController.createCategory
)

export default router