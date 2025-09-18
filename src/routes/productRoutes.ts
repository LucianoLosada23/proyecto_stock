import { Router } from "express";
import { handleInputErrors } from "../middleware/validations";
import { ProductController } from "../controllers/product";

const router = Router()

// GET  
router.get("/" ,  
    ProductController.getProducts
)

//POST
router.post("/" ,
    handleInputErrors,
    ProductController.createProduct

)

export default router