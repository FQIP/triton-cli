export default () => {
  return {
    type: "input",
    name: "port",
    message: "请输入启动端口号",
    validate(answer) {
      if (answer) return true;
      return "请输入启动端口号";
    },
  };
};
