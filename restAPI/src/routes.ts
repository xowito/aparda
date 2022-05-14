import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";

import { add_user } from "./handlers/add_user.ts";
import { delete_user } from "./handlers/delete_user.ts";
import { get_all_users } from "./handlers/get_all_users.ts";
import { get_user } from "./handlers/get_user.ts";
import { update_user } from "./handlers/update_user.ts";
import { welcome } from "./handlers/welcome.ts";
import { sucursal } from "./handlers/sucursal.ts";
const router = new Router();

router
  .get("/", welcome)
  .get("/sucursal", sucursal)
  .get("/users", get_all_users)
  .get("/users/:id", get_user)
  .post("/users", add_user)
  .put("/users/:id", update_user)
  .delete("/users/:id", delete_user);
export default router;
