const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/e-com");













// const connectdb=async ()=>{
//     mongoose.connect("mongodb://0.0.0.0:27017/e-commerce")
//     const productSchema= new mongoose.Schema({});
//     const product= mongoose.model("product",productSchema);
//     const data = await product.find();
//     console.log(data)
//   }
//   connectdb();