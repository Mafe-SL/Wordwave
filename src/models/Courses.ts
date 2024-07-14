import mongoose from "mongoose";

const courseSchema  = new mongoose.Schema({
    title: String,
    imageSrc: String,
})

export default mongoose.models.Courses || mongoose.model('Courses', courseSchema);

