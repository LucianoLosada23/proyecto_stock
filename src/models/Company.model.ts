import {Table, Model , Column , DataType} from "sequelize-typescript"

@Table({
    tableName: "companies", // Nombre de la tabla en la base de datos
    timestamps : true  // Agrega createdAt y updatedAt automáticamente (opcional)
})

class Company extends Model{
    
    @Column({
        type : DataType.STRING(100),
        allowNull:false
    })

    declare nameCompany : string
    
    @Column({
        type: DataType.STRING(100),
        unique:true,
        allowNull:false

    })

    declare cuitCompany : string
    
    @Column({
        type: DataType.STRING(100),
        allowNull:false

    })
    
    declare addressCompany : string
    
    @Column({
        type: DataType.STRING(100),
        allowNull:false
    
    })
    
    declare phoneCompany : string

    @Column({
        type:DataType.STRING(100),
        allowNull:false,
        unique:true
    })

    declare emailCompany : string

    @Column({
        type:DataType.STRING(100),
        allowNull:false,
        unique:true
    })

    declare passwordCompany : string

}

export default Company

