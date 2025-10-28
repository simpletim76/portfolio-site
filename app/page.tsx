import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import { HomelabProject, MusicProject, WoodworkingProject } from '@/components/sections/ProjectDetails'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <HomelabProject />
      <MusicProject />
      <WoodworkingProject />
      <About />
      <Contact />
    </>
  )
}
