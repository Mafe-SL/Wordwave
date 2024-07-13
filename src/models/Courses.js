import mongoose from "mongoose";

const CoursesSchema = new mongoose.Schema({
    title: String,
    imageSrc: String,
})

export default mongoose.model('Courses', CoursesSchema)