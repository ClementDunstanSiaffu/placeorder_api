
import axios from "axios"

type orderedProductType = {
    id:String,
    productName:String,
    productPrice:Number,
    productImage:String,
    available:String
}

class Helper{

    sendOrderedProduct(orderredProducts:orderedProductType,deviceId:String){
        const body = {
            deviceId:deviceId,
            products:orderredProducts
        }
        axios.post("http://localhost:8000/postOrder",{where:body},{headers:{'content-type': 'application/json'}}
        ).catch((err)=>{
            console.log(err,"check errr")
        })
    }
}

export default new Helper();