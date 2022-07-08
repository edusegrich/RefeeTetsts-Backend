import Question from '../models/Question'
import Sport from '../models/Sport'

export const getAllQuestions = (req: any, res: any) => {
    Question.find({
        sportId: req.query.sportId
    }, (err: any, qts: any) => {
        err && res.status(500).send(err.message)
        if (qts.length === 0) qts = { message: 'Questions of this sport do not exist' }
        res.status(200).json(qts)
    })
}

export const getQuestion = (req: any, res: any) => {
    Question.findOne({
        _id: req.query.id
    }, (err: any, qst: any) => {
        err && res.status(500).send(err.message)
        if (!qst) qst = { message: 'Question does not exist' }
        res.status(200).json(qst)
    })
}

export const addQuestion = async (req: any, res: any) => {
    const question = new Question({
        statement: req.body.statement,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer,
        sportId: req.body.sportId
    })

    const sport = await Sport.findOne({
        _id: req.body.sportId
    }).exec()

    question.save((err, qst) => {
        err && res.status(500).send({
            status: 500,
            message: err.message 
        })
        res.status(200).json(qst)
    })
}
