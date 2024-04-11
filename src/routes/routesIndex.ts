import { Router } from "express";

import accountRouter from "./account.routes";

const routes = Router();

routes.use("/account", accountRouter);
// routes.use("/post", postRouter);

export default routes;