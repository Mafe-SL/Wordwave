import mongoose from "mongoose";

  const userProgressSchema = new mongoose.Schema({
    userName: { type: String, default: 'User' },
    userImageSrc: { type: String, default: '/mascot.svg' },
    activeCourseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses' },
    hearts: { type: Number, default: 5 },
    points: { type: Number, default: 0 }
  });
  
export default mongoose.models.UserProgress || mongoose.model('UserProgress', userProgressSchema);