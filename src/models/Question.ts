import mongoose from 'mongoose'
const { Schema, model } = mongoose

interface IQuestion {
    statement: string,
    options: [],
    correctAnswer: number,
    sportId: string
}

const questionSchema = new Schema<IQuestion>({
    statement: { type: String, required: true, unique: true },
    options: { type: [], required: true },
    correctAnswer: { type: Number, required: true },
    sportId: String
})

const Question = model<IQuestion>('Question', questionSchema)

export default Question
