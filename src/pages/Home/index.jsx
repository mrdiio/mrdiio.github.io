import { useEffect } from 'react'
import Hero from './Hero'
import { useLocation } from 'react-router-dom'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const element = location.hash.substring(1)

    if (element) {
      scrollToElement(element)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="flex flex-col">
      <Hero />

      <About />

      <Experience />

      <Education />

      <Contact />
    </div>
  )
}
