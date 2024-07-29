"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getCourseById, getUserProgress } from "../db/queries"
import db from "../db/drizzle"
import { challengeProgress, challenges, userProgress } from "../db/schema"
import { and, eq } from "drizzle-orm"

export const upsertUserProgress = async (courseId: number) => {
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
        await db.update(userProgress).set({
            activeCourseId: courseId,
            userName: user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg"
        })
        revalidatePath("/courses")
        revalidatePath("/learn")
        redirect("/learn")
    }

    await db.insert(userProgress).values({
        userId,
        activeCourseId: courseId,
        userName: user.firstName || 'User',
        userImageSrc: user.imageUrl || '/mascot.svg'
    })

    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
}

export const reduceHearts = async (challengeId: number) => {
    const {userId} = await auth()

    if (!userId) throw new Error("Unauthorized")

    const currentUserProgress = await getUserProgress()

    const challenge = await db.query.challenges.findFirst({
        where: eq(challenges.id, challengeId)
    })

    if (!challenge) throw new Error("challenge not found")

    const lessonId = challenge.lessonId



    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId)
        )
    })

    const isPractice = !!existingChallengeProgress

    if (isPractice) {
        return { error: "practice" }
    }

    if (!currentUserProgress) throw new Error("user progress not found")

    if (currentUserProgress.hearts === 0) {
        return {error: "hearts"}
    }

    await db.update(userProgress).set({
        hearts: Math.max(currentUserProgress.hearts - 1, 0)
    }).where(eq(userProgress.userId, userId))

    revalidatePath("/shop")
    revalidatePath("/learn")
    revalidatePath("/quests")
    revalidatePath("/leaderboard")
    revalidatePath(`/lesson/${lessonId}`)
}

// "use server"

// import userProgress from "@/models/userProgress"
// import { auth, currentUser } from "@clerk/nextjs/server"
// import { revalidatePath } from "next/cache"
// import { redirect } from "next/navigation"
// import { getCourseById, getUserProgress } from "../db/queries"

// export const upsertUserProgress = async (courseId: number) => {
//     const {userId} = await auth()
//     const user = await currentUser()

//     if(!userId || !user) {
//         throw new Error("Unauthorized")
//     }

//     const course = await getCourseById(courseId)

//     if (!course) {
//         throw new Error("Course not found")
//     }

//     // if (!course.units.lenght || !course.units[0].lessons.lenght) {
//     //     throw new Error("Course is empty")
//     // }

//     const exixstingUserProgress = await getUserProgress()

//     if (exixstingUserProgress) {
//         await userProgress.updateOne({
//             activeCourseId: courseId,
//             userName: user.firstName || 'User',
//             userImageSrc: user.imageUrl || '/mascot.svg'
//         })
//         revalidatePath("/courses")
//     revalidatePath("/learn")
//     redirect("/learn")
//     }

//     await userProgress.insertMany({
//         userId,
//         activeCourseId: courseId,
//         userName: user.firstName || 'User',
//         userImageSrc: user.imageUrl || '/mascot.svg'

//     })

//     revalidatePath("/courses")
//     revalidatePath("/learn")
//     redirect("/learn")
// }