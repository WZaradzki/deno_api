import { roles, users } from "../databases/mongo.ts";
import { helpers } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import { Role as RoleValidation } from "../validation/Role.ts";

class UsersController {
    list = async (ctx: any) => {
        try {
            const queryParams = helpers.getQuery(ctx);

            const allUsers = await roles.find({}).toArray();
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
            const { role } = await body.value;
            RoleValidation.parse(role);

            await roles.insertOne(role);

            response.status = 201;
            response.body = {
                success: true,
                data: role,
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

export default new UsersController();

