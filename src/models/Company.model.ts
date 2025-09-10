import {Table, Model , Column , DataType} from "sequelize-typescript"

@Table({
    tableName: "companies", // Nombre de la tabla en la base de datos
    timestamps : true  // Agrega createdAt y updatedAt automáticamente (opcional)
})

class Company extends Model{
    
    @Column({
        type : DataType.STRING(100)
    })

    declare name : string
}

export default Company