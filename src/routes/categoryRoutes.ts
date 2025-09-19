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

//DELETE
router.delete("/:id",
    handleInputErrors,
    CategoryController.deleteCategory
)

export default router