import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardPage() {
  return (
    <div>
      <h1>WordWave</h1>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashboardPage
