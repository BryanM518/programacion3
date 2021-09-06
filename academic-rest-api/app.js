/** packages */
const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")

/** app configuration */
const app = express()
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded(
    {
        extended: true
    }
)

app.use(jsonParser)
app.use(urlEncodedParser)

const ipFn = require("./middleware/getIpAddress")
app.use("*", ipFn)

/** Methods */
app.get("/", (req, res, next) => {
    res.send("welcome to academic rest api")
})

const userRoutes = require("./routes/user.routes")
userRoutes(app)

// token middleware
tkFn = require("./middleware/verifyToken")

app.use(tkFn)

const studentRoutes = require("./routes/student.routes")
studentRoutes(app)

const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app)

const periodRoutes = require("./routes/period.routes")
periodRoutes(app)

const courseRoutes = require("./routes/course.routes")
courseRoutes(app)

app.listen(port, () => {
    console.log("Server is running...")
})