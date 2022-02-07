/* Node Imports */
import { Server } from "bittorrent-tracker";

const server: Server = new Server();
server.listen(448);
server.on("error", (e) => {
    console.log(e);
});
server.on("warning", (e) => {
    console.log(e);
});
server.on("listening", () => {
    console.log(`listening...`);
});
server.on("start", (addr) => {
    console.log(`${addr} connected...`);
});
server.on("complete", (addr) => {
    console.log(`${addr} completed...`);
});
server.on("update", (addr) => {
    console.log(`${addr} updated...`);
});
server.on("stop", (addr) => {
    console.log(`${addr} disconnected...`);
});
