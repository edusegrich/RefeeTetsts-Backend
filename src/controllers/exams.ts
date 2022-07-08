import Exam from '../models/Exam'
import Question from '../models/Question'

export const getExam= (req: any, res: any) => {
    Exam.find({
        userId: req.query.userId
    }, (err: any, exm: any) => {
        err && res.status(500).send(err.message)
        if (exm.length === 0) exm = { message: 'User does not have exams' }
        res.status(200).json(exm)
    })
}

export const addExam = async (req: any, res: any) => {
    const answers = req.body.answersList
    let examScore = 0

    for (const answer of answers) {
        const question = await Question.findOne({
            _id: answer.id
        }).exec()
        if (question?.correctAnswer === answer.selectedAnswer) {
            examScore++
        }
    }

    examScore = (examScore / answers.length) * 100

    const exam = new Exam({
        userId: req.body.userId,
        answersList: answers,
        score: examScore
    })

    console.log('Exam')
    console.log(exam)

    exam.save((err, exm) => {
        err && res.status(500).send({
            status: 500,
            message: err.message 
        })
        res.status(200).json(exm)
    })
}
