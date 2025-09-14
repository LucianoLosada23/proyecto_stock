import { Table, Model, Column, DataType, ForeignKey, BelongsTo, HasMany} from "sequelize-typescript";
import Product from "./Product.model";

@Table({
  tableName: "categories",
  timestamps: true, 
})

class Category extends Model {

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })

  declare name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })

  declare description: string;

  // 🔹 Clave foránea autorreferente  
  @ForeignKey(() => Category)

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })

  declare parentId: number | null;

  // 🔹 Relación con su categoría padre
  @BelongsTo(() => Category, { as: "parent" })

  declare parent?: Category;

  // 🔹 Relación con sus subcategorías (hijos)
  @HasMany(() => Category, { as: "children", foreignKey: "parentId" })

  declare children?: Category[];


  @HasMany(() => Product)
  
  declare products: Product[]
}

export default Category;
