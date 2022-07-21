import { Column, CreatedAt, DeletedAt, ForeignKey, Model, Table, UpdatedAt } from "sequelize-typescript";
import Role from "./role.model";
import User from "./user.model";

export interface UserHasRolesInterface {
    user_fk: number;
    role_fk: number;
}

@Table({
    tableName: "user_has_roles",
    timestamps: true,
})
export default class UserHasRoles extends Model implements UserHasRolesInterface {
    @ForeignKey(() => User)
    @Column
    user_fk!: number;

    @ForeignKey(() => Role)
    @Column
    role_fk!: number;

    @CreatedAt
    created_at!: Date;

    @UpdatedAt
    updated_at!: Date;

    @DeletedAt
    deleted_at!: Date;
}