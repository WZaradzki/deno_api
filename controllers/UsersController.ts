import { users } from "../databases/mongo.ts";
import { helpers } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import { User as UserValidation } from "../validation/User.ts";

class RolesController {
    list = async (ctx: any) => {
        try {
            const queryParams = helpers.getQuery(ctx);

            const allUsers = await users.find({}).toArray();
            if (allUsers) {
                ctx.response.status = 200;
                ctx.response.body = {
                    success: true,
                    data: allUsers,
                };
            } else {
                ctx.response.status = 500;
                ctx.response.body = {
                    success: false,
                    msg: "Internal Server Error",
                };
            }
        } catch (err) {
            ctx.response.body = {
                success: false,
                msg: err.toString(),
            };
        }
    };

    create = async ({ response, request }: { response: any, request: any }) => {
        try {
            const body = await request.body({ type: 'json' });
            const { user } = await body.value;
            await UserValidation.parseAsync(user);

            await users.insertOne(user);

            response.status = 201;
            response.body = {
                success: true,
                data: user,
            };

        } catch (err) {
            if (err.name === 'ZodError') {
                response.status = 422;
                response.body = {
                    success: false,
                    msg: err,
                };
            } else {
                response.status = 500;
                response.body = {
                    success: false,
                    msg: err.toString(),
                };
            }
            
        }
    };
}

export default new RolesController();

