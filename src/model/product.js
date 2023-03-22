import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        name: String
    },
    price: {
        type: Number
    },
    status: {
        type: Boolean
    },
    desc: {
        type: String
    },
    quanty: {
        type: Number
    }
})
export default mongoose.model('products', productSchema);

