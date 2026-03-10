const fs = require('fs')
const path = require('path')

const filesToCopy = [
    { source: './package.json', destination: './build/package.json' },
    { source: './.env', destination: './build/.env' },
]

for (const fileToCopy of filesToCopy) {
    const { source, destination } = fileToCopy
    if (!fs.existsSync(source)) {
        console.warn(`${source} does not exists`)
        continue
    }
    if (!fs.existsSync(path.dirname(destination))) {
        console.warn(`${path.dirname(destination)} does not exists`)
        continue
    }
    fs.copyFileSync(source, destination)
    console.log(`Copied ${source} to ${destination}`)
}

function copyFile(source, destination) {
    const dir = path.dirname(destination)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
    fs.copyFileSync(source, destination)
    console.log(`Copied ${source} -> ${destination}`)
}

function copyProtos(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) return

    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
        const srcPath = path.join(srcDir, entry.name)
        const destPath = path.join(destDir, entry.name)

        if (entry.isDirectory()) {
            copyProtos(srcPath, destPath)
        } else if (entry.isFile() && srcPath.endsWith('.proto')) {
            copyFile(srcPath, destPath)
        }
    }
}

copyProtos('./gRPC', './build/gRPC')