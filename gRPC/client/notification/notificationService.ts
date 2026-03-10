import { Priority } from '#types/project'
import client from './index'
import {
    SendVerifyMailResponse,
    SendPasswordResetMailResponse,
    SendPasswordResetSuccessMailResponse,
    SendProjectInviteResponse,
    SendRemoveMemberMailResponse,
    SendChangeRoleMailResponse,
    SendNotificationResponse
} from './INotificationService'

export async function sendVerifyMail(to: string, token: string): Promise<SendVerifyMailResponse> {
    return new Promise((resolve, reject) => {
        client.SendVerifyMail({ to, token }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export async function sendPasswordResetMail(to: string, token: string): Promise<SendPasswordResetMailResponse> {
    return new Promise((resolve, reject) => {
        client.SendPasswordResetMail({ to, token }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export async function sendPasswordResetSuccessMail(to: string): Promise<SendPasswordResetSuccessMailResponse> {
    return new Promise((resolve, reject) => {
        client.SendPasswordResetSuccessMail({ to }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export async function sendProjectInvite(inviter: string, to: string, projectName: string, application: string): Promise<SendProjectInviteResponse> {
    return new Promise((resolve, reject) => {
        client.SendProjectInvite({ inviter, to, projectName, application }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export async function sendRemoveMemberMail(from: string, to: string, projectName: string, application: string): Promise<SendRemoveMemberMailResponse> {
    return new Promise((resolve, reject) => {
        client.SendRemoveMemberMail({ from, to, projectName, application }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export async function sendChangeRoleMail(from: string, to: string, projectName: string, application: string, role: string): Promise<SendChangeRoleMailResponse> {
    return new Promise((resolve, reject) => {
        client.SendChangeRoleMail({ from, to, projectName, application, role }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export async function sendNotification(userIds: string[], title: string, message: string, priority: Priority): Promise<SendNotificationResponse> {
    return new Promise((resolve, reject) => {
        client.SendNotification({ userIds, title, message, priority }, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

export default {
    sendVerifyMail,
    sendPasswordResetMail,
    sendPasswordResetSuccessMail,
    sendProjectInvite,
    sendRemoveMemberMail,
    sendChangeRoleMail
}