import Koa from "koa";
import Router from "koa-router";
import serve from "koa-static";
import views from "koa-views";
import body from "koa-body";
import path from "path";

const __dirname = path.resolve();

const app = new Koa();

app.use(serve(__dirname + "./static"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

app.use(
  body({
    multipart: true,
  })
);

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "hello Koa";
});

app.use(router.routes());

app.listen(5000, () => {
  console.log("6666........");
});
