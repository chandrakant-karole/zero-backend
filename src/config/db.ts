import { connect } from "mongoose";
async function connection() {
    try {
        await connect('mongodb+srv://chandrakantinfograins:kKFfTrx9OkEdlNmf@cluster0.prcoajp.mongodb.net/zero?retryWrites=true&w=majority') // db url
        console.log('DB connected');
    } catch (error) {
        console.log(error);
        
    }
}

export default connection