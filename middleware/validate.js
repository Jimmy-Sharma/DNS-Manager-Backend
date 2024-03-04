const validate = (req, res, next) => {
    if (req.method === "POST") {
        if (req.body.name && req.body.domainName) {
            next()
        } else {
            res.send(
                {
                    "err": "Please fill all the details"
                })
        }
    }else{
        res.send(error)
    }
}

module.exports={
    validate
}