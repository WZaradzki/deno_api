import { Model, DataTypes } from "https://deno.land/x/denodb@v1.1.0/mod.ts";
import User from "./User.ts";

export default class Role extends Model {
    static table = 'roles';

    static fields = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        name: DataTypes.STRING,
    };

    static users() {
        return this.hasMany(User);
    }

    static timestamps = true;

}