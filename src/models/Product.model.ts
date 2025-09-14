import {Table, Model , Column , DataType, AllowNull, ForeignKey, BelongsTo} from "sequelize-typescript"
import Company from "./Company.model";
import Category from "./Category.model";

@Table({
    tableName:"products", //Nombre de la tabla en la base de datos
    timestamps: true

})

class Product extends Model{
   
    @Column({
        type: DataType.STRING(100),
        allowNull: false

    })

    declare nameProduct : string 

    @Column({
        type:DataType.STRING(100),
        allowNull: false
    })

    declare descriptionProduct : string

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true
    })

    declare productCode : string

    @Column({
        type:DataType.DECIMAL(10,2),
        allowNull: false
    })
    
    declare costPrice : number 

    @Column({
        type:DataType.DECIMAL(10,2),
        allowNull: false
    })
    
    declare salePrice : number 

    @Column({
        type:DataType.INTEGER(),
        allowNull: false
    })
    
    declare minStock : number



    // FK a Company
    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyId: number;

    @BelongsTo(() => Company) // Relacion muchos a uno con Company
    declare company: Company;

    // FK a Category
    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare categoryId: number;

    @BelongsTo(() => Category) // Relacion muchos a uno con Category
    declare category: Category;

    
}

export default Product