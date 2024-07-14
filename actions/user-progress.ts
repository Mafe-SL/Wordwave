"use server"

import { getCourseById, getUserProgress } from "@/db/queries"
import userProgress from "@/models/userProgress"
import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export const upsertUserProgress = async (courseId: string) => {
    const {userId} = await auth()
    const user = await currentUser()

    if(!userId || !user) {
        throw new Error("Unauthorized")
    }

    const course = await getCourseById(courseId)

    if (!course) {
        throw new Error("Course not found")
    }

    // if (!course.units.lenght || !course.units[0].lessons.lenght) {
    //     throw new Error("Course is empty")
    // }

    const exixstingUserProgress = await getUserProgress()

    if (exixstingUserProgress) {
        await userProgress.updateOne({
            activeCourseId: courseId,
            userName: user.firstName || 'User',
            userImageSrc: user.imageUrl || '/mascot.svg'
        })
        revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
    }

    await userProgress.insertMany({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || 'User',
        userImageSrc: user.imageUrl || '/mascot.svg'

    })

    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
}