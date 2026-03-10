import { config } from 'dotenv'
import path from 'path'

config({
    path: path.join(__dirname, './.env')
})

declare global {
    var dirname: string
}

global.dirname = __dirname