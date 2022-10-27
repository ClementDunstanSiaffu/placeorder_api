
import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    deviceId:{
        type:String
    },
    deliveryInfo:{
        city:{type:String},
        street:{type:String},
        phone:{type:String},
        transactiontype:{type:String},
        deliverytime:{type:String},
        deliverydate:{type:String}
    }
})

mongoose.model("ORDERS",ordersSchema);