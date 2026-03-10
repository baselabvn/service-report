import 'module-alias/register'
import '#env'
import '#configs/index'
// import '#gRPC/server'
import '#api/index'
import cache from '#cache/index'
import service from '#services/index'
import { start } from '#server'

const bootstrap = async (): Promise<void> => {
    await cache()
    await service()
    start()
}

bootstrap()