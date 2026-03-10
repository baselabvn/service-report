import cors from 'cors'
import { app, server } from '#server'

const { CORS_ORIGIN = "*" } = process.env

app.use(
    cors({
        origin: CORS_ORIGIN == '*' ? '*' : CORS_ORIGIN.split(","),
        methods: ['GET', 'POST'],
        exposedHeaders: [
            'File-Name'
        ]
    })
)