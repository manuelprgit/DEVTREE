import {CorsOptions} from 'cors'

export const corsConfig:CorsOptions = {
    origin: (origin, callBack) => {
        if(origin === 'http://localhost:5173'){
            callBack(null, true);
        }else{
            callBack(new Error('Error en CORS'));
        }
    }
}