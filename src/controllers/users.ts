import User from '../models/User'
import Sport from '../models/Sport'
import { ObjectId } from 'mongoose'

export const loginUser = (req: any, res: any) => {
    User.find({
        username: req.body.username,
        password: req.body.password,
    }, (err: any, usr: any) => {
        err && res.status(500).send(err.message)
        res.status(200).json({
            status: 200,
            data: usr
        })
    })
}

export const getUser = (req: any, res: any) => {
    User.find({
        username: req.query.username
    }, (err: any, usr: any) => {
        err && res.status(500).send(err.message)
        if (usr.length === 0) usr = { message: 'User does not exist' }
        res.status(200).json(usr)
    })
}

export const addUser = (req: any, res: any) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        sportId: req.body.sportId
    })

    user.save((err, usr) => {
        err && res.status(500).send({
            status: 500,
            message: err.message 
        })
        res.status(200).json(usr)
    })
}

export const addSport = async (req: any, res: any) => {
    console.log('username')
    console.log(req.body.username)
    console.log('deporte')
    console.log(req.body.sport)

    const sport = await Sport.findOne({
        name: req.body.sport
    }).exec()
    const id = sport?.id.toString()
    console.log('id deporte')
    console.log(id)
    User.updateOne({ username: req.body.username }, { sportId: id }, (err: any, usr: any) => {
        err && res.status(500).send(err.message)
        res.status(200).json({
            status: 200,
            message: 'User modified successfully',
            data: usr
        })
    })
}
