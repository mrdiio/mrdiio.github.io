import {
  HiFaceSmile,
  HiOutlineCog6Tooth,
  HiOutlinePuzzlePiece,
  HiOutlineWrenchScrewdriver,
} from 'react-icons/hi2';
import HeadingSection from '../../components/HeadingSection';

export default function About() {
  const development = [
    'PHP',
    'Javascript',
    'Node.JS',
    'Dart',
    'Golang',
    'HTML5',
    'CSS3',
    'MySQL',
  ];

  const tools = [
    'VSCode',
    'Git + GitHub',
    'Postman',
    'Command Line',
    'Composer',
    'Yarn',
    'Docker',
  ];

  const frameworks = [
    'Laravel',
    'React.JS',
    'Flutter',
    'Next.JS',
    'Gin',
    'TailwindCSS',
    'Bootstrap',
  ];

  return (
    <div id="about" className="pt-24 py-10">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection title="About Me" />

          <div className="container flex">
            <div className="grid sm:grid-cols-12 gap-10 sm:gap-x-24 border-2 rounded-lg p-4 shadow-sm">
              <div className="sm:col-span-12">
                <HiFaceSmile className="h-52 w-auto text-yellow-400 mx-auto" />
              </div>

              <div className="sm:col-span-6 prose">
                <span className="text-2xl font-semibold">Hi, I&apos;m Dio</span>
                <p className="">
                  Velit ad reprehenderit veniam velit ad. Et cillum qui in
                  aliqua pariatur sunt occaecat velit consectetur reprehenderit
                  sunt duis amet occaecat. Proident excepteur ex mollit
                  voluptate excepteur et reprehenderit.
                </p>

                <p className="">
                  Eu officia nulla aliquip laborum incididunt deserunt. Aliqua
                  deserunt anim nostrud consectetur proident commodo. Enim nulla
                  fugiat ullamco Lorem labore consequat ea nostrud consectetur
                  excepteur ut mollit. Pariatur ullamco aliquip enim commodo et
                  labore dolore officia adipisicing fugiat. Reprehenderit mollit
                  aliquip quis duis do dolore fugiat elit ullamco incididunt ad
                  tempor.
                </p>
              </div>
              <div className="sm:col-span-6 prose">
                <span className="text-2xl font-semibold uppercase">Skills</span>
                <div className="grid sm:grid-cols-6 my-5">
                  <div className="sm:col-span-2">
                    <div className="flex items-center">
                      <HiOutlineCog6Tooth className="inline-block mr-1.5" />
                      Development
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <ul className="mt-0 flex flex-wrap list-none p-0 gap-2 text-white text-sm uppercase">
                      {development.map((tech, i) => (
                        <li
                          key={i + tech}
                          className="flex items-center rounded-full bg-yellow-400 px-5 my-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid sm:grid-cols-6 my-5">
                  <div className="sm:col-span-2">
                    <div className="flex items-center">
                      <HiOutlinePuzzlePiece className="inline-block mr-1.5" />
                      Frameworks
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <ul className="mt-0 flex flex-wrap list-none p-0 gap-2 text-white text-sm uppercase">
                      {frameworks.map((tech, i) => (
                        <li
                          key={i + tech}
                          className="flex items-center rounded-full bg-yellow-400 px-5 my-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid sm:grid-cols-6 my-5">
                  <div className="sm:col-span-2">
                    <div className="flex items-center">
                      <HiOutlineWrenchScrewdriver className="inline-block mr-1.5" />
                      Tools
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <ul className="mt-0 flex flex-wrap list-none p-0 gap-2 text-white text-sm uppercase">
                      {tools.map((tech, i) => (
                        <li
                          key={i + tech}
                          className="flex items-center rounded-full bg-yellow-400 px-5 my-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
