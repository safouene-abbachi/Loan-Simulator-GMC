const express = require('express');
const router = express.Router();



const Client = require('../../models/Clients')


router.get('/', (req, res) => {
    Client.find()
        .sort({ email: 1 })

        .then(user => res.json(user));
});


router.delete('/:id', (req, res) => {
    Client.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})

router.put('/:id', (req, res) => {

    const { name, email,  } = req.body
    Client.findOneAndUpdate(req.params.id, { $set: { name: name, email: email, rôle: rôle} })
        .then(item => item.put().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
})



module.exports = router;
