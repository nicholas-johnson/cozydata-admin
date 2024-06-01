import { handlers } from "./handlers";

export async function start() {
  const { setupWorker } = require("msw/browser");
  const worker = setupWorker(...handlers);
  return worker.start();
}
