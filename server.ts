import express, { Express } from 'express'
import { createServer, Server } from 'http'

const { PORT } = process.env

export const app: Express = express()

export const server: Server = createServer(app)

export const start = (): void => {
    server.listen(Number(PORT), (): void => {
        console.log('REPORT SERVICE IS UP ON PORT:', PORT)
    })
}