export default () => {
  return {
    type: "input",
    name: "packageName",
    message: "设置应用名称",
    validate(answer) {
      if (answer) return true;
      return "请输入你要设置的应用名称";
    },
  };
};
