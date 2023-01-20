const {Router} = require("express")
const Order = require("../models/Order")
const router = Router();
const auth = require("../middleware/auth.middleware")

router.post("/generate", auth ,async (req, res) => {
    try {
        const {name, price, address, addition} = req.body;
        const readiness = "Need half pay";

        const order = new Order({
            name, price, readiness, address, owner: req.user.userId, date: Date.now, addition
        })

        await order.save();
        res.status(201).json({order});
    } catch (e) {
        res.status(500).json({message: "Something is wrong..."})
    }
})

router.get("/", auth, async (req, res) => {
    try {
        const orders = await Order.find({owner: req.user.userId})
        res.json(orders);
    } catch (e) {
        res.status(500).json({message: "Something is wrong..."})
    }
})

router.get("/:id", auth, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.json(order);
    } catch (e) {
        res.status(500).json({message: "Something is wrong..."})
    }
})

module.exports = router;