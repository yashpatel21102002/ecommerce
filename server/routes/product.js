

const {verifyToken, verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../routes/verifyToken");
const Product = require("../models/Product")


const router = require("express").Router();


//CREATE
router.post("/",verifyTokenAndAdmin,async (req,res)=>{
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(e){
        res.status(500).json(e);
    }
})


//UPDATE
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        const toupdateProduct = await Product.findByIdAndUpdate(req.params.id , {$set:req.body},{new:true})
        res.status(200).json(toupdateProduct)

    }catch(e){
        res.status(500).json(e)
    }
    
})

//DELETE
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("product has been deleted")

    }catch(e){
        res.status(500).json(e);
    }
})


//GET PRODUCT
router.get("/:id",async(req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    }
    catch(e){
        res.status(500).json(e);
    }
   
})

//GET ALL PRODUCT
router.get("/",async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try{
       let products;
       if(qNew){
        products = await Product.find().sort({createdAt:-1}).limit(5);

       }else if(qCategory){
        products = await Product.find({categories:{
            $in:[qCategory],
        }})
       }else{
        products = await Product.find();
       }
       res.status(200).json(products);
    }catch(e){
        res.status(500).json(e)
    }
    
})


module.exports= router;