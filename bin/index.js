#!/usr/bin/env node
import fs from "fs";
import path from "path";
import rimraf from "rimraf";
import chalk from "chalk";
import { execaSync } from "execa";
import question from "./question/index.js";
import createIndexTemplate from "./createIndexTemplate.js";
import createTemplatePackage from "./createTemplatePackage.js";
import { createConfig } from "./config.js";

// 获取当前node执行的路径
function getRootPath() {
  return path.resolve(process.cwd(), config.packageName);
}

const answers = await question();
const config = createConfig(answers);

// 0、删除已创建的项目文件
rimraf.sync(getRootPath());

// 1、创建模版文件夹
fs.mkdirSync(getRootPath());

// 2、创建模版内的入口文件
fs.writeFileSync(`${getRootPath()}/index.js`, createIndexTemplate(config));

// 3、创建package.json
fs.writeFileSync(`${getRootPath()}/package.json`, createTemplatePackage(config));

// 4、安装依赖
console.log(chalk.blue("安装依赖"));

execaSync("yarn", {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});

execaSync("yarn", ["serve"], {
  cwd: getRootPath(),
  stdio: [2, 2, 2],
});
