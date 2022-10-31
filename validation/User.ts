import { Bson } from "https://deno.land/x/mongo@v0.31.1/mod.ts";
import { z } from "https://deno.land/x/zod@v3.19.1/mod.ts";
import { roles } from "../databases/mongo.ts";


export const User = z.object({
    role_id: z.string().refine(async (id) => {
        console.log(id)
        const role = await roles.findOne({
            _id: new Bson.ObjectId(id)
        });
        console.log(role);
        if (role) {
            return true;
        }

        return false;
    }),
    name: z.string(),
    surname: z.string(),
    email: z.string().email(),
    password: z.string(),
}).required();