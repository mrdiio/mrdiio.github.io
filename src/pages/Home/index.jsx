import HeadingSection from '../../components/HeadingSection';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div id="about" className="py-10">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col items-center justify-center">
            <HeadingSection title="About Me" />
            <div className="pt-10">
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
