const {Schema,models,model} = require('mongoose');
const productSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    images:[{type:String}]
});
export const ProductModel = models.product || model('product', productSchema);