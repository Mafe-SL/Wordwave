import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/mongodb";
import Courses from "../../../models/Courses";

export async function GET() {
    try {
        await connectDB()

        const course = await Courses.find()
        return NextResponse.json(course)
    } catch (error) {
        console.log(error)
    }
}