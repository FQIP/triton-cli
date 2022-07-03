import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import prettier from "prettier";

export default function createIndexTemplate(config) {
  const __dirname = fileURLToPath(import.meta.url);
  const templateCode = fs.readFileSync(path.resolve(__dirname, "../template/koa/index.ejs"));
  const code = ejs.render(templateCode.toString(), {
    middleware: config.middleware,
    port: config.port,
  });
  return prettier.format(code, { parser: "babel" });
}
