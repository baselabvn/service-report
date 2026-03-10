import { readdirSync, rmSync, mkdirSync, existsSync, copyFileSync, statSync } from 'fs'

export type Directory = {
    name: string
    type: 'file' | 'directory' | 'unknow'
}

export const getFileSize = (dir: string) => {
    const stat = statSync(dir)
    return stat.size
}

export const getDirectories = (dir: string): Directory[] => {
    return readdirSync(dir, {
        withFileTypes: true
    }).map(dirent => {
        switch(true) {
            case dirent.isDirectory():
                return { name: dirent.name, type: 'directory' }
            case dirent.isFile():
                return { name: dirent.name, type: 'file' }
            default:
                return { name: dirent.name, type: 'unknow' }
        }
    })
}

export const createDirectory = (dir: string): void => {
    if(dir) {
        mkdirSync(dir, {
            recursive: true
        })
    }
}

export const copyDirectory = (originPath: string, destinationPath: string): void => {
    copyFileSync(originPath, destinationPath)
}

export const removeDirectory = (dir: string): boolean => {
    if(dir) {
        rmSync(dir, {
            recursive: true,
            force: true
        })
        return true
    } else {
        return false
    }
}

export const checkExists = (dir: string): boolean => {
    if(dir) {
        return existsSync(dir)
    } else {
        return false
    }
}

export default {
    getFileSize,
    getDirectories,
    createDirectory,
    copyDirectory,
    checkExists,
    removeDirectory
}