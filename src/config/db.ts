import { connect } from "mongoose";
const { MONGODB_URL } = process.env
async function connection() {
    try {
        await connect(MONGODB_URL as string) // db url
        console.log('DB connected');
    } catch (error) {
        console.log(error);

    }
}

export default connection