
import axios from "axios"

type orderedProductType = {
    id:String,
    productName:String,
    productPrice:Number,
    productImage:String,
    available:String
}

class Helper{

    sendOrderedProduct(orderredProducts:orderedProductType[],deviceId:String){
        const body = {
            deviceId:deviceId,
            products:orderredProducts
        }
        axios.post("https://orders-zkbs.onrender.com/postOrder",{where:body},{headers:{'content-type': 'application/json'}}
        ).catch((err)=>{
        })
    }
}

export default new Helper();