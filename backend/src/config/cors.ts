import { CorsOptions } from 'cors'

export const corsConfig: CorsOptions = {
    origin: (origin, callBack) => {
        if (origin === process.env.FRONTEND_URL) {
            callBack(null, true);
        } else {
            callBack(new Error('Error en CORS'));
        }
    }
}