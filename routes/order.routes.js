const {Router} = require("express")
const config = require("config")
const Order = require("../models/Order")
const router = Router();
const auth = require("../middleware/auth.middleware")

router.post("/generate", async (req, res) => {
    try {
        const baseUrl = config.get("baseUrl");
        const {} =
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

router.get("/:id", async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.json(order);
    } catch (e) {
        res.status(500).json({message: "Something is wrong..."})
    }
})

module.exports = router;