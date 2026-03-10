import crypto from 'crypto'

type AccessToken = {
    raw: string
    hashed: string
}

function generateAccessToken(length: number): AccessToken {
    const raw = crypto.randomBytes(length).toString('hex').slice(0, length)
    const hashed = crypto.createHash('sha256').update(raw).digest('hex')

    return { raw, hashed }
}

export default generateAccessToken

console.log(generateAccessToken(16))