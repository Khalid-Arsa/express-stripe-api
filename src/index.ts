/**
 * Main application file
 */

import { config } from "./config";
import { server } from "./server";

server.listen(config.port, async () => {
  console.log(`The server is listening on port: ${config.port}`)
});
