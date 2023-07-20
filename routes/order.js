const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken")
const Order = require("../models/Order")
const router = require(`express`).Router()

// CREATE 

router.post("/", verifyToken, async(req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedOrder = await Order.findOneAndUpdate({_id: req.params.id}, 
            {
            $set: req.body
            }, 
            {new:true})
        res.status(200).json(updatedOrder)
    } catch(err) {
        res.status(500).json("Error")
    }
})


//Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const deletedOrder = await Order.findByIdAndDelete(req.params.id);
      
      if (!deletedOrder) {
        return res.status(404).json("Order not found");
      }
  
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });


  //GET

  router.get("/find/:userid", verifyTokenAndAuth, async (req, res) => {
    try {
      const orders = await Order.find({userId: req.params.userid});
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL Product

router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders)
    } catch(err) {
        res.status(500).json(err)
    }
})

// Get monthly income

router.get("/income", verifyTokenAndAdmin, async(req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {
        const income = await Order.aggregate([
            {$match:{createdAt: { $gte: prevMonth}}},
            {
                $project:{
                    month:{$month: "$createdAt"},
                    sales:"$amount",
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum: "$sales"}
                }
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        console.log(err)
        res.status(500).json("error occured");
    }
});


 module.exports = router