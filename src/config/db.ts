import { connect } from "mongoose";
async function connection() {
    try {
        await connect('') // db url
        console.log('DB connected');
    } catch (error) {
        console.log(error);
        
    }
}

export default connection