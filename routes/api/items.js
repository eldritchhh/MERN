const express = require('express')
const router = express.Router()

// item model
const Item = require('../../models/Item')

// non scrivo api/items perchè qui arriva solo roba che ha già api/items (vedi server.js riga 5)
// @route GET api/items
// @desc get all items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date : -1 })
        .then(items => res.json(items))
})

// @route POST api/items
// @desc create an Item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name : req.body.name
    })
    newItem.save()
           .then(item => res.json(item))    
})

// @route POST api/items:id
// @desc delete an Item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success : true})))    
        .catch(err => res.status(404).json({success : false}))
})


module.exports = router