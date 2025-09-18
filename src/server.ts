import express from "express"
import db from "./config/db"
import colors  from "colors"
import companyRoutes  from "./routes/companyRoutes"
import categoryRoutes from "./routes/categoryRoutes"
import productRoutes from "./routes/productRoutes"
//Conectar a la Base de Datos
export async function connectDB() {
    try {
        await db.authenticate() //db.authenticate() es un método de Sequelize que intenta verificar la conexión con la base de datos.
        db.sync({alter: true}) // es otro método de Sequelize que sincroniza tus modelos con la base de datos. Esto significa que crea las tablas si no existen.
        console.log(colors.blue.bold("Conexión exitosa a la base de datos"))
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold("Hubo un error al conectar a la base de datos"))
    }
} 

connectDB()

// Creación del servidor
const app = express()

// Habilitar json en las peticiones
app.use(express.json())

// Rutas de Company
app.use("/api/company" , companyRoutes)

// Rutas de Category
app.use("/api/category", categoryRoutes )

// Rutas de Product
app.use("/api/product", productRoutes )

export default app   
