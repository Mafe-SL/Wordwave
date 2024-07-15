// import { connectDB } from "@/libs/mongodb";
// import Course, { ICourse } from "@/models/Courses";
// import UserProgress, { IUserProgress } from "@/models/userProgress";
// import { auth } from "@clerk/nextjs/server";
// import { cache } from "react";


// // Función auxiliar para convertir documentos de MongoDB en objetos planos, en consola salian un montón de advertencias por como se pasan los 
// // objetos sin que sean "planos"
// function toPlainObject<T>(obj: T): T {
//   return JSON.parse(JSON.stringify(obj));
// }

// export const getCourses = cache(async () => {
//   await connectDB();
//   const data = await Course.find().lean<ICourse[]>();
//   return toPlainObject(data);
// });

// export const getUserProgress = cache(async () => {
//   await connectDB();
//   const { userId } = await auth();

//   if (!userId) {
//     return null;
//   }

//   const data = await UserProgress.findOne({ userId }).populate<{ activeCourseId: ICourse }>('activeCourseId').lean<IUserProgress>();


//   if (data) {
//     return toPlainObject({
//       ...data,
//       activeCourseId: data.activeCourseId
//     });
//   }

//   return null;
// });

// export const getCourseById = cache(async (courseId: string) => {
//   const data = await Course.findById(courseId).lean<ICourse>();
//   return data;
// });