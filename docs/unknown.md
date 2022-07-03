### 开发脚手架的四个步骤

> 1、创建文件夹
>
> 2、创建入口文件 
>
> 3、创建package.json
>
> 4、安装依赖







### 1、fs.readFileSync

fs.readFileSync方法返回的是一个Buffer对象，是个二进制的文件流，但是在ejs.render()方法中，第一个参数需要的是string类型，可以通过toString方法将二进制文件流转成字符串内容。

```javascript
const __dirname = fileURLToPath(import.meta.url);
const templateCode = fs.readFileSync(path.resolve(__dirname, "../template/koa/index.ejs"));
const code = ejs.render(templateCode.toString(), {
  middleware: config.middleware,
  port: config.port,
});
return prettier.format(code, { parser: "babel" });
```









### 8、开发的脚手架安装至全局进行调试

```shell
npm link // 链接至全局
npm root -g // 查看全局安装情况
```

![全局安装情况](/Users/fangqipeng/Documents/探索/CLI开发/triton-cli/docs/imgs/npm-root-g.png)





### 9、指定系统以什么程序来执行入口文件？

```js
#!/usr/bin/env node
```

### 10、如何对生成的模版代码进行格式化？

> 通过代码格式化工具prettier提供的钩子函数

```js
import prettier from "prettier";
const code = ejs.render(templateCode.toString(), {
  middleware: config.middleware,
  port: config.port,
});
prettier.format(code, { parser: "babel" });
```

### 11、发布

```shell
npm login --registry https://registry.npmjs.org
// 输入账号密码
npm publish --registry https://registry.npmjs.org
// 提交，注意版本号
```

