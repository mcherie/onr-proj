const express = require("express")
const router = express.Router()
const data = require("../data.json")

router.get("/:area", (req, res, next) => {
  const areaData = req.params.area
  res.send(data.areaData[areaData])

})

module.exports = router