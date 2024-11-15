import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'movies' })
export class Movies extends Model<Movies> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  viewers: number;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  favourite: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  like: boolean;
}
