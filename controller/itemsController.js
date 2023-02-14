const billDb=[]

const re_route= (req, res) => {
    res.redirect('./items')
}

const items_get= (req, res) => {
    res.send(billDb)
}

const items_post= (req, res) => {
    billDb.push(req.body)
    res.status(200).send({response: 'New Bill Added Successfully'})
}

module.exports={
    re_route, 
    items_get, 
    items_post
  }

