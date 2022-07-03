import Listr from "listr";
import { execa } from "execa";

function generateTasks(execaConfig) {
  const tasks = new Listr([
    {
      title: "Install package dependencies with Yarn",
      task: (ctx, task) =>
        execa("yarn", [], execaConfig).catch(() => {
          ctx.yarn = false;
          task.skip("Yarn not available, install it via `npm install -g yarn`");
        }),
    },
    {
      title: "Install package dependencies with npm",
      enabled: (ctx) => ctx.yarn === false,
      task: () => execa("npm", ["install"]),
    },
    {
      title: "Start ...",
      task: () => execa("npm", ["run", "serve"], execaConfig),
    },
  ]);
  return tasks;
}

export default function listrTask(execaConfig) {
  generateTasks(execaConfig)
    .run()
    .catch((err) => {
      console.error(err);
    });
}
