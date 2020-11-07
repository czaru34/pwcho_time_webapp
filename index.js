import * as express from 'express'
import * as path from 'path'
import moment from 'moment-timezone'
import bodyParser from 'body-parser'
import { env } from 'process'
import * as cors from 'cors'

console.log(moment())
const PORT = 8080
const HOST = '0.0.0.0'

const app = express.default()
app.use(cors.default({origin: `${HOST}:${PORT}`}));

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.default.static('./public'))

app.get('/', (req, res) => {
    res.redirect('index.html')
})

app.post('/getTime', (req, res) => {
    var date = moment.tz(new Date(), req.body.timezone)
    res.json({time: date.format('DD/MM, HH:mm:ss')})
})

app.listen(PORT, HOST)
console.log(`App is listening on ${HOST + `:` + PORT}`)
