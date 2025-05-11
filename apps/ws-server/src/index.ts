import { Socket } from "dgram";
import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws) => {

    await client.user.create({
        data: {
            username: Math.random().toString(36).substring(2, 15),
            password: Math.random().toString(36).substring(2, 15)
        }
    })

    ws.send("Hi you are connected to the ws-server");
})