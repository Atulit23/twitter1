import React from 'react'
import axios from 'axios'
import { store } from './store'
import Sidebar from './Sidebar'
import TweetsSection from './TweetsSection'
import Trending from './Trending'

export default function Home() {
  return (
    <main className='home__main' >
      <Sidebar />
      <TweetsSection />
      <Trending />
    </main>
  )
}
