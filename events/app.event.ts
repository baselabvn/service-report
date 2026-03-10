import Emitter from 'events'

class AppEmitter extends Emitter {}

const appEvent: AppEmitter = new AppEmitter()

// export const  = Symbol('')

export default appEvent