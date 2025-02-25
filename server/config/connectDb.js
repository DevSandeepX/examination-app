import mongoose from "mongoose"

const connectDb = async () => {
    try {
        const connectIntance = await mongoose.connect(`${process.env.MONGODB_URI}/onlineExam`)
        if (connectIntance) {
            console.log("Db Connected !! ", connectIntance.connection.host)
        }
    } catch (error) {
        
        console.log("Connection Error ", error.message)
    }
}


export default connectDb