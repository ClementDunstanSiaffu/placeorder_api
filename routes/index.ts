
import { Request,Response } from "express";
import mongoose from "mongoose";
import helper from "../helper/helper";
import { AppType } from "../types/types";
const OrderDbInstance = mongoose.model("ORDERS");

class Routes{

    getPlaceOrderRoutes(app:AppType){
        app.post("/placeorder",(req:Request,res:Response)=>{
            const cartProduct = req.body.where.productInfo;
            helper.sendOrderedProduct(cartProduct,req.body.where.deviceId)
            const orderDbInstance = new OrderDbInstance({deviceId:req.body.where.deviceId,deliveryInfo:req.body.where.deliveryInfo});
            orderDbInstance.save((err,docs)=>{
                if (!err){
                    res.status(200).json({"status":true})
                }else{
                    res.status(200).json({"status":false})
                }
            })
        })  
    }
}

module.exports =  new Routes();