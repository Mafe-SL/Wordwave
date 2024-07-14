import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'
import { Header } from './header'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'
import { redirect } from "next/navigation";

const DashboardPage = async () => {
  const userProgressData = getUserProgress()

  const [
    userProgress
  ] = await Promise.all([
    userProgressData
  ])

  if (!userProgress || !userProgress.activeCourseId) {
    redirect("/courses")
  }
  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress activeCourse={{title: "Spanish", imageSrc: "/es.svg"}} hearts={5} points={34} hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title='Spanish' />
      </FeedWrapper>
    </div>
  )
}

export default DashboardPage
