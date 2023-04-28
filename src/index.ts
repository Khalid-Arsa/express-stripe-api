/**
 * Main application file
 */

import { server } from "./server";


const PORT = process.env.PORT || 5000;

server.listen(PORT, async () => {
  console.log(`The server is listening on port: ${PORT}`)
});
