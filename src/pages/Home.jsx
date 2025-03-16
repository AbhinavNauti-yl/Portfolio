import React from 'react'
import MainLayout from '../components/MainLayout'
import Card from '../components/Card'
import Intro from '../components/Intro'
import Skill from '../components/Skill'
import TechStack from '../components/TechStack'

export default function Home() {
  return (
    <MainLayout>
      <Intro />
      <TechStack />
      <Skill />
    </MainLayout>
  )
}
