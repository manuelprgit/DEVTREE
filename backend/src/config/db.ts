import mongoose from 'mongoose';
import colors from 'colors'

export const connectDB = async (): Promise<void> => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI);
        const url = `${connection.host}:${connection.port}`
        console.log(colors.bgGreen.white.bold('Se ha conectado en: ' + url));
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message));
        process.exit();
    }
}