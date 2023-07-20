const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")
const Cart = require("../models/Cart")
const router = require(`express`).Router()

// CREATE 

router.post("/", verifyToken, async(req, res) => {
    const newCart = new Cart(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    try{
        const updatedCart = await Cart.findOneAndUpdate({_id: req.params.id}, 
            {
            $set: req.body
            }, 
            {new:true})
        res.status(200).json(updatedCart)
    } catch(err) {
        res.status(500).json("Error")
    }
})


//Delete

router.delete("/:id", verifyToken, async (req, res) => {
    try {
      const deletedCart = await Cart.findByIdAndDelete(req.params.id);
      
      if (!deletedCart) {
        return res.status(404).json("Cart not found");
      }
  
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //GET

  router.get("/find/:userid", verifyTokenAndAuth, async (req, res) => {
    try {
      const cart = await Cart.findOne({userId: req.params.userid});
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL Product

router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch(err) {
        res.status(500).json(err)
    }
})


 module.exports = router