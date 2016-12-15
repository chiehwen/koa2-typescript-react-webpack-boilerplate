import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as chalk from "chalk";

import router from "./routes";

const app = new Koa();
const port = process.env.PORT || 8080;

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () =>
  console.log(chalk.black.bgGreen.bold(`Listening on port ${port}`)));

export default app;
