export default () => {
  return {
    type: "checkbox",
    message: "请选择你要添加的中间件",
    name: "middleware",
    choices: [
      {
        name: "koaStatic",
      },
      {
        name: "koaViews",
      },
      {
        name: "koaRouter",
      },
      {
        name: "koaBody",
      },
    ],
    validate(answer) {
      if (answer.length < 1) {
        return "你最少要选择一个";
      }
      return true;
    },
  };
};
