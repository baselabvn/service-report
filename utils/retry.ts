import delay from './delay'
import { isFunction } from './checkType'

const retry = async <T>(
    fn: () => Promise<T>,
    retries = 5,
    delayTime = 2000,
    onRetry?: (err: any, attempt: number) => void
): Promise<T> => {
    let attempt = 0

    while (true) {
        try {
            return await fn()
        } catch (err) {
            attempt++
            if (isFunction(onRetry)) onRetry(err, attempt)
            if (attempt >= retries) throw err
            await delay(delayTime)
        }
    }
}

export default retry