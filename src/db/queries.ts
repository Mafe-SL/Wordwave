import {connectDB} from "@/libs/mongodb";
import Course from "@/models/Courses";
import UserProgress from "@/models/userProgress";
import { auth } from "@clerk/nextjs/server";
import { cache } from "react";

export const getCourses = cache(async () => {
    await connectDB();
    const data = await Course.find().lean();
    return data;
});


export const getUserProgress = cache(async () => {
    await connectDB();
    const { userId } = await auth();
  
    if (!userId) {
      return null;
    }
  
    const data = await UserProgress.findOne({ userId }).populate('activeCourseId').lean();
  
    console.log('UserProgress data:', JSON.stringify(data, null, 2));
  
    if (data) {
      let activeCourseId: string | undefined;
      if (typeof data.activeCourseId === 'object' && data.activeCourseId !== null) {
        activeCourseId = data.activeCourseId._id?.toString();
      } else if (typeof data.activeCourseId === 'string') {
        activeCourseId = data.activeCourseId;
      }
  
      return {
        ...data,
        activeCourseId
      };
    }
  
    return null;
  });

  export const getCourseById = cache(async (courseId: string) => {
    const data = await Course.findOne({courseId})

    return data
  })