"use client"

import Courses from "@/models/Courses"
import { Card } from "./card"
import userProgress from "@/models/userProgress"
import { useTransition } from "react"
import { useRouter } from "next/navigation"
import { upsertUserProgress } from "../../../../actions/user-progress"

type Props = {
    courses: typeof Courses.arguments[]
    activeCourseId?: string 
}
export const List = ({ courses, activeCourseId }: Props) => {

    const router = useRouter()
    const [pending, startTransition] = useTransition()

    const onClick = (id: string) => {
        if (pending) return
        if (id === activeCourseId) {
            return router.push("/learn")
        }
        startTransition(() => {
            upsertUserProgress(id)
        })
    }
    return (
        <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
            {courses.map((course) => (
                <Card
                key={course._id}
                _id={course._id}
                title={course.title}
                imageSrc={course.imageSrc}
                onClick={onClick}
                disabled={pending}
                active={course._id === activeCourseId} />
            ))}
        </div>
    );
}
