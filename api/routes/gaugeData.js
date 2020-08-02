const express = require("express")
const router = express.Router()
const data = require("../data.json")

router.get("/", (req, res, next) => {
  res.send(data.gaugeData)
})

module.exports = router