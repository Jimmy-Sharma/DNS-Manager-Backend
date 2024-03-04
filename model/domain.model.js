const mongoose = require("mongoose")

const domainSchema = mongoose.Schema({
    name: String,
    domainName: String
}, {
    versionKey: false
})

const DomainModel = new mongoose.model("domain", domainSchema)

module.exports = {
    DomainModel
}