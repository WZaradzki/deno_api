import { Model, DataTypes } from "https://deno.land/x/denodb@v1.1.0/mod.ts";
import Role from "./Role.ts";

export default class User extends Model {
  static table = 'users';

  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
  };

  static role() {
    return this.hasOne(Role);
  }

  static timestamps = true;
}