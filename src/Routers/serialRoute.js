const express = require("express")
const serial = require("../models/serial")

const router = express.Router()


router.post("/serial", async (req, res) => {
    console.log(req.body)
    const data = new serial(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status: "FAILED",
            message: "failed yo :("
        })
    } else {
        res.json({
            status: "SUCCESS",
            message: "it`s succes dude",
            data: result
        })
    }
})

// get records
router.get("/serial", async (req, res) => {
    try {
        const result = await serial.find()
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Not found records"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Records found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

// get single record by ID
router.get("/serial/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const result = await serial.findById(_id)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this ID"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Record found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

// get single record by NAME
router.get("/serial/name/:name", async (req, res) => {
    try {
        const name = req.params.name
        const result = await serial.findOne({name: name})
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this Name"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Record founded by Name",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

// update records
router.put("/serial/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const result = await serial.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not found on this ID"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Record found",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})

// delete records
router.delete("/serial/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const result = await serial.findByIdAndDelete(_id)
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record NOT deleted"
            })
        } else {
            res.json({
                status: "SUCCESS",
                message: "Record deleted",
                data: result
            })
        }
    }
    catch (e) {
        console.log(e)
    }
})


module.exports = router