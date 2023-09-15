import { useEffect } from 'react';
import HeadingSection from '../../components/HeadingSection';
import Hero from './Hero';
import { useLocation } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Project from './Project';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const element = location.hash.substring(1);

    if (element) {
      scrollToElement(element);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col">
      <Hero />

      <About />

      <Experience />

      <Education />

      <Project />

      <div id="contact" className="py-10 ">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col items-center justify-center">
            <HeadingSection title="Contact" />
            <div className="">
              <div className="text-gray-600 text-center">
                Minim adipisicing labore duis sint non. Nulla duis ipsum fugiat
                nulla proident qui dolore eiusmod dolor nulla. Elit nostrud non
                commodo Lorem quis ipsum elit irure fugiat ad. Dolor labore
                minim tempor labore occaecat. Duis deserunt proident sunt mollit
                cillum tempor eu labore qui ullamco incididunt laborum sint ex.
                Quis Lorem minim velit officia. Nulla commodo ipsum Lorem
                officia enim ea nostrud sit occaecat nostrud ex.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
