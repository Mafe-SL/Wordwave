import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Header } from './header'
import { UserProgress } from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'
import { redirect } from "next/navigation";
import { ICourse } from '@/models/Courses';

const DashboardPage = async () => {
  const userProgressData = await getUserProgress()

  if (!userProgressData || !userProgressData.activeCourseId) {
    redirect("/courses")
  }

  const activeCourse = userProgressData.activeCourseId as ICourse;

  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress 
          activeCourse={activeCourse}
          hearts={userProgressData.hearts} 
          points={userProgressData.points}
          hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={activeCourse.title} />
      </FeedWrapper>
    </div>
  )
}

export default DashboardPage