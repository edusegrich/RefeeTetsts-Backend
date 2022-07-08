import Sport from '../models/Sport'

export const getSport = (req: any, res: any) => {
    Sport.find({
        name: req.query.name
    }, (err: any, spt: any) => {
        err && res.status(500).send(err.message)
        if (spt.length === 0) spt = { message: 'Sport does not exist' }
        res.status(200).json(spt)
    })
}

export const addSport = (req: any, res: any) => {
    const sport = new Sport({
        name: req.body.name,
        questionsPerExam: req.body.questionsPerExam,
    })

    sport.save((err, spt) => {
        err && res.status(500).send({
            status: 500,
            message: err.message 
        })
        res.status(200).json(spt)
    })
}
