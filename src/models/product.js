const {Schema} = require('mongoose');
const productSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:String, required:true},
    images:[{type:String}]
});
export const product = models.product || model('product', productSchema);