const express = require("express")
const domainRouter = express.Router()
const { DomainModel } = require("../model/domain.model")
require("dotenv").config()
const { validate } = require("../middleware/validate")

//route to create or add new domain to the database
domainRouter.post("/domains", validate, async (req, res) => {
    let data = req.body
    try {
        let newDomain = await new DomainModel(data)
        newDomain.save()
        res.status(201).send({
            "msg": "New Domain added to DB", newDomain
        })
    } catch (error) {
        res.status(400).send({
            "msg": error.message
        })
    }
})

//route to get all domain from the database
domainRouter.get("/domains", async (req, res) => {
    try {
        const domains = await DomainModel.find()
        res.status(200).send(domains)
    } catch (error) {
        res.status(400).send({
            "msg": error.message
        })
    }
})

//route to get only a domain from the database with a particular id
domainRouter.get("/domains/:id", async (req, res) => {
    let ID = req.params.id
    try {
        const domains = await DomainModel.findOne({ _id: ID })
        res.status(200).send(domains)
    } catch (error) {
        res.status(400).send({
            "msg": error.message
        })
    }
})

//route to update a domain from the database with a particular id
domainRouter.patch("/domains/:id", async (req, res) => {
    let ID = req.params.id
    let updatedVersion = req.body

    try {
        await DomainModel.findByIdAndUpdate({ _id: ID }, updatedVersion)
        res.status(204).send({
            "msg": "Domain has been updated"
        })
    } catch (error) {
        res.status(400).send({
            "msg": error.message
        })
    }
})

//route to delete a domain from the database with a particular id
domainRouter.delete("/domains/:id", async (req, res) => {
    let ID = req.params.id

    try {
        await DomainModel.findByIdAndDelete({ _id: ID })
        res.status(202).send({
            "msg": "Domain has been deleted"
        })
    } catch (error) {
        res.status(400).send({
            "msg": error.message
        })
    }
})

module.exports = {
    domainRouter
}