import express from "express";
import { client } from "@repo/db/client"

const app = express();

app.use(express.json());
const PORT = 3500;

app.get("/", (req, res) => {
    res.json("Hello from http-server")
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    const user = await client.user.create(
        {
            data: {
                username: username,
                password: password
            }
        }
    )

    res.json({
        msg: "Signup successful",
        user
    })
})

//signin endpoint

app.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    const user = await client.user.findFirst({
        where: {
            username: username,
            password: password
        }
    })

    if (!user) {
        res.status(401).json({
            msg: "Invalid credentials"
        })
        return;
    }

    res.json({
        msg: "Signin successful",
        user
    })
})


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})