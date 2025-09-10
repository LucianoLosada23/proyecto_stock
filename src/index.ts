import server from "./server"
import colors from "colors"

// variable de entorno oara el puerto o sino hay default 4000
const port = process.env.PORT || 4000 

// servidor escuchando en el puerto
server.listen(port , () => {
    console.log(colors.cyan.bold(`REST API funcionando en el puerto ${port}`));
})

