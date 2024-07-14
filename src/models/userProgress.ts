import mongoose from "mongoose";
import { type ICourse } from "./Courses";

export interface IUserProgress {
  _id: mongoose.Types.ObjectId;
  userId: string;
  userName: string;
  userImageSrc: string;
  activeCourseId: mongoose.Types.ObjectId | ICourse;
  hearts: number;
  points: number;
}

const userProgressSchema = new mongoose.Schema<IUserProgress>({
  userId: String,
  userName: { type: String, default: 'User' },
  userImageSrc: { type: String, default: '/mascot.svg' },
  activeCourseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses' },
  hearts: { type: Number, default: 5 },
  points: { type: Number, default: 0 }
});

export default mongoose.models.UserProgress || mongoose.model<IUserProgress>('UserProgress', userProgressSchema);