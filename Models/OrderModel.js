import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    orderItems:[
        {
            name:{type:String,required:true},
            mood:{type:String,required:false},
            sugar:{type:String,required:false},
            ice:{type:String,required:false},
            topping:{type:Array,required:false},
            qty:{type:Number,required:true},
            image:{type:String,required:true},
            price:{type:Number,required:true},
            product:{
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref:"Product"
            }
        }
    ],
    shippingAddress:{
        address:{type:String,required:true},
        name:{type:String,required:true},
        endAddress:{type:String,required:true},
        ward:{type:String,required:true},
        distance:{type:String,required:false},
        phone:{type:String,required:true},
        delivery:{type:String,required:true},
    },
    paymentMethod:{
        type:String,
        required:true,
        
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String}
    },
    taxPrice:{
        type:Number,
        required:true,
        default:0.0
    },
    invoiceCode:{
        type:String,
    },
   
    shippingPrice:{
        type:Number,
        required:true,
        default: 0.0,
    },
    totalPrice:{
        type:Number,
        required:true,
        default:false
    },
    isPaid:{
        type:Boolean,
        required:true,
        default:false
    },
    paidAt:{
        type: Date
    },
    isDelivered:{
        type: Boolean,
        required:true,
        default:false

    },
    deliveredAt:{
        type:Date
    },

},
{
    timestamps:true
}
)
const Order = mongoose.model("Order",orderSchema)
export default Order