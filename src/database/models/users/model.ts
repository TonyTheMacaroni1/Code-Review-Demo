import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
  Column,
  Default,
  DeletedAt,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize';

export type IUsers = InferAttributes<Users>;
export type IUsersCreation = InferCreationAttributes<Users>;

@Table({
  createdAt: false,
  defaultScope: {
    attributes: { exclude: [ `password` ] },
  },
  scopes: {
    includePassword: {},
  },
  tableName: `users`,
  updatedAt: false,
})
export class Users extends Model<IUsers, IUsersCreation> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id!: number;

  @AllowNull(false)
  @Column
  public firstName: string;

  @AllowNull(false)
  @Column
  public lastName: string;

  @AllowNull(false)
  @Unique
  @Column
  public email: string;

  @AllowNull(false)
  @Column
  public username: string;

  @AllowNull(false)
  @Column
  public password: string;

  @Column
  public title: string;


  @DeletedAt
  @Column
  public deletedAt: Date;

  @Column
  public disabledAt: Date;
}
