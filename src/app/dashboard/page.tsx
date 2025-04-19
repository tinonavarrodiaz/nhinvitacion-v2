import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { SignOut } from '../components/auth/signout-button'

export default async function DashboardPage() {
  const session = await auth()
  console.log(session)
  if (!session) return redirect('/')

  // if (!session?.user) return redirect('/auth/login')
  return (
    <>
      <h1>DashboardPage</h1>
      <h2>Welcome {session?.user?.name}</h2>
      <p>Email: {session?.user?.email}</p>
      {/* <p><img src={session.user.image} alt="User Avatar" /></p> */}
      {/* <p>ID: {session?.user?.id}</p> */}
      <SignOut />
    </>
  )
}
