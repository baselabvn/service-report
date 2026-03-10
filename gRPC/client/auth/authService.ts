import client from './index'
import { User } from './IAuthService'

export async function getRoles() {
    return new Promise((resolve, reject) => {
        client.GetRoles({}, (err: any, res: any) => {
            if (err) {
                reject(err)
            } else {
                resolve(res.roles)
            }
        })
    })
}

export async function getUserById(id: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
        client.GetUserById({ id }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res.user)
            }
        })
    })
}

export default {
    getRoles,
    getUserById
}