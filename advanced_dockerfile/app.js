import exress from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello Docker")
})

app.get("/health", (req, res) => {
    res.status(200).send("Ok")
})

app.listen(3000, () => console.log("Server running on port 3000"))