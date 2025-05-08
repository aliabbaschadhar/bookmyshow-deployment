import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client"

const wss = new WebSocketServer({ port: 4000 });

wss.on("connection", async (socket) => {

    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })
    socket.send("Hi there you are connected to server")
}) 