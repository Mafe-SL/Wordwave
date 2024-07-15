import { FeedWrapper } from '@/components/feed-wrapper'
import { StickyWrapper } from '@/components/sticky-wrapper'
import { Header } from './header'
import { UserProgress } from '@/components/user-progress'
import { redirect } from "next/navigation";
import { getUserProgress } from '../../../../db/queries';

const DashboardPage = async () => {
  const userProgressData = await getUserProgress()

  if (!userProgressData || !userProgressData.activeCourse) {
    redirect("/courses")
  }


  return (
    <div className='flex flex-row-reverse gap-[48px] px-6'>
      <StickyWrapper>
        <UserProgress 
          activeCourse={userProgressData.activeCourse}
          hearts={userProgressData.hearts} 
          points={userProgressData.points}
          hasActiveSubscription={false} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgressData.activeCourse.title} />
      </FeedWrapper>
    </div>
  )
}

export default DashboardPage