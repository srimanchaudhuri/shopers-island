const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")
const Product = require("../models/Product")
const router = require(`express`).Router()

// CREATE 

router.post("/", verifyTokenAndAdmin, async(req, res) => {
    const newProd = new Product(req.body)

    try {
        const savedProduct = await newProd.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", verifyTokenAndAuth, async (req, res) => {
    try{
        const updatedProduct = await Product.findOneAndUpdate({_id: req.params.id}, 
            {
            $set: req.body
            }, 
            {new:true})
        res.status(200).json(updatedProduct)
    } catch(err) {
        res.status(500).json("Error")
    }
})


//Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const deletedProduct = await User.findByIdAndDelete(req.params.id);
      
      if (!deletedUser) {
        return res.status(404).json("Product not found");
      }
  
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //GET

  router.get("/find/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL Product

  router.get("/", async (req, res) => {
    const qNew = req.query.new
    const qCategory = req.query.category
    try {
        let products;

        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(5)
        } else if (qCategory) {
            products = await Product.find({categories:{
                $in: [qCategory],
            },
        })
        } else {
            products = await Product.find()
        }

      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });


 module.exports = router