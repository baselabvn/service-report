import { app } from '#server'
import { urlencoded, json } from 'express'

app.use(
    urlencoded({
        extended: true
    })
)

app.use(json())