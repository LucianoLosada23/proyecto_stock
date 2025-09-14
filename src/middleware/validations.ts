import type {Request , Response , NextFunction} from "express"
import {validationResult} from "express-validator"

// un middleare es para validar los datos de entrada antes de que lleguen al controlador
export const handleInputErrors = (req : Request, res : Response , next : NextFunction) => {
    
    // obtener los errores de validación
    let errors = validationResult(req)

    // si hay errores, devolverlos en formato JSON
    if(!errors.isEmpty()){
        // devolver un error 400 con los errores de validación
        return res.status(400).json({errors : errors.array()})
    }

    // si no hay errores, continuar con la siguiente función
    next()
}