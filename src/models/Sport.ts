import mongoose from 'mongoose'
const { Schema, model } = mongoose

interface ISport {
    name: string,
    questionsPerExam: number
}

const sportSchema = new Schema<ISport>({
    name: { type: String, required: true, unique: true },
    questionsPerExam: Number
})

const Sport = model<ISport>('Sport', sportSchema)

export default Sport
