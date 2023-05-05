/**
 * Main application file
 */

import { config } from "./config";
import { server } from "./server";

if(process.env.NODE_ENV !== "test"){
  server.listen(config.port, async () => {
    console.log(`The server is listening on port: ${config.port}`)
  });
}
