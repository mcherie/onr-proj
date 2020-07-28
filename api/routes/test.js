const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
  res.send("You reached test API")
})

module.exports = router