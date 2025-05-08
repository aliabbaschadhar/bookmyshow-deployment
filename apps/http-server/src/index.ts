import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there");
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const user = await prismaClient.user.create({
        data: {
            username, password
        }
    })
    res.json({
        user: user,
        msg: "User created"
    })
})

app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const user = await prismaClient.user.findFirst({
        where: {
            username: username
        }
    })

    if (!user) {
        res.json({
            msg: "User not found"
        })
        return;
    }

    res.json({
        user: user,
        msg: "User signedIn "
    })
})


app.listen(3500, () => {
    console.log("App is running on port 3500")
})