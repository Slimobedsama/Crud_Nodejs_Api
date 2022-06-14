const friendsData = require('../models/friendModel');
const uuid = require('uuid');

exports.getAll = (req, res) => {
    res.json(friendsData);
}

exports.getSingle = (req, res) => {
    const single = friendsData.find(friend => friend.id === Number(req.params.id));
    if (single) {
        res.json(single)
    } else {
        res.status(400).json({msg: `Requested with id ${req.params.id} not found.`});
    }
}

exports.createNew = (req, res) => {
    let newFriend = req.body;
    newFriend = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email
    }

    if(!req.body.firstName || !req.body.lastName || !req.body.age || !req.body.email){
        res.status(400).json({msg: 'You can\'t create without required body/data.'})
    } else {
        friendsData.push(newFriend);
        res.json({msg: 'Successful created', friendsData});
    }
}

exports.update = (req, res) => {
    let info = friendsData.find(friend => friend.id === Number(req.params.id))
    if(info) {
        let updateInfo = req.body;
        friendsData.filter(friend => {
            if(friend.id === Number(req.params.id)) {
                friend.firstName = updateInfo.firstName? updateInfo.firstName : friend.firstName,
                friend.lastName = updateInfo.lastName? updateInfo.lastName : friend.lastName,
                friend.age = updateInfo.age? updateInfo.age : friend.age,
                friend.email = updateInfo.email? updateInfo.email : friend.email
                res.json({msg: `Successful updated data.`, friend})
            }
        })
    } else {
        res.status(400).json({msg: `Requested parameter with id ${req.params.id} not found.`})
    }
}

exports.takeOut = (req, res) => {
    let removeFriend = friendsData.filter(friend => friend.id === Number(req.params.id))
    if(removeFriend) {
        res.json({msg: `Successfully deleted.`, friendData:friendsData.filter(friend => friend.id !== Number(req.params.id))})
    } else {
        res.status(400).json({msg: `Requested parameter with id ${req.params.id} not found.`})
    }
}
