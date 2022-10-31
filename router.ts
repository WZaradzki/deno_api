import { Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

import RolesController from "./controllers/RolesController.ts";
import UsersController from "./controllers/UsersController.ts";


const router = new Router();

router.get("/api/users", UsersController.list);
router.post("/api/users", UsersController.create)

router.get("/api/roles", RolesController.list);
router.post("/api/roles", RolesController.create)


export default router;