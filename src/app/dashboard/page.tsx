import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardPage() {
  return (
    <div className='flex flex-col max-w-[200px]'>
      <h1>WordWave</h1>
      <UserButton afterSignOutUrl='/'/>
      <Button>inicio</Button>
      <Button variant={'primary'}>inicio</Button>
      <Button variant={'primaryOutline'}>inicio</Button>
      <Button variant={'secondary'}>inicio</Button>
      <Button variant={'secondaryOutline'}>inicio</Button>
      <Button variant={'danger'}>inicio</Button>
      <Button variant={'dangerOutline'}>inicio</Button>
      <Button variant={'super'}>inicio</Button>
      <Button variant={'superOutline'}>inicio</Button>
      <Button variant={'ghost'}>inicio</Button>
      <Button variant={'sidebar'}>inicio</Button>
      <Button variant={'sidebarOutline'}>inicio</Button>
    </div>
  )
}

export default DashboardPage
