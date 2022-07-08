import mongoose from 'mongoose'
const { Schema, model } = mongoose

interface IExam {
    userId: string,
    answersList: [],
    score: number
}

const examSchema = new Schema<IExam>({
    userId: { type: String, required: true},
    answersList: { type: [], required: true},
    score: Number
})

const Exam = model<IExam>('Exam', examSchema)

export default Exam
