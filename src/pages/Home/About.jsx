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

          <div className="container flex flex-col gap-10">
            <div className="grid sm:grid-cols-12 gap-10 sm:gap-x-10">
              <div className="sm:col-span-4 border border-2 rounded-md">
                <div className="flex items-center justify-center h-full">
                  <HiFaceSmile className="h-72 w-auto text-yellow-400" />
                </div>
              </div>

              <div className="sm:col-span-8">
                <div className="flex flex-col gap-5 text-gray-600 leading-relaxed">
                  <span className="text-2xl font-semibold">
                    Hi, I&apos;m Dio
                  </span>
                  <span className="">
                    Velit ad reprehenderit veniam velit ad. Et cillum qui in
                    aliqua pariatur sunt occaecat velit consectetur
                    reprehenderit sunt duis amet occaecat. Proident excepteur ex
                    mollit voluptate excepteur et reprehenderit.
                  </span>

                  <span className="">
                    Eu officia nulla aliquip laborum incididunt deserunt. Aliqua
                    deserunt anim nostrud consectetur proident commodo. Enim
                    nulla fugiat ullamco Lorem labore consequat ea nostrud
                    consectetur excepteur ut mollit. Pariatur ullamco aliquip
                    enim commodo et labore dolore officia adipisicing fugiat.
                    Reprehenderit mollit aliquip quis duis do dolore fugiat elit
                    ullamco incididunt ad tempor.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 items-center text-gray-600">
              <span className="text-2xl font-semibold uppercase">Skills</span>

              <div className="flex flex-col sm:w-1/3 border">
                <div className="flex flex-col items-center">
                  <span className="border w-full text-center">
                    <HiOutlineCog6Tooth className="inline-block mr-1.5" />
                    Development
                  </span>
                  <ul className="mt-0 flex flex-wrap justify-center list-none py-5 gap-2 text-white text-sm uppercase">
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

                <div className="flex flex-col items-center">
                  <span className="border w-full text-center">
                    <HiOutlinePuzzlePiece className="inline-block mr-1.5" />
                    Frameworks
                  </span>
                  <ul className="mt-0 flex flex-wrap justify-center list-none py-5 gap-2 text-white text-sm uppercase">
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

                <div className="flex flex-col items-center">
                  <span className="border w-full text-center">
                    <HiOutlineWrenchScrewdriver className="inline-block mr-1.5" />
                    Tools
                  </span>
                  <ul className="mt-0 flex flex-wrap justify-center list-none py-5 gap-2 text-white text-sm uppercase">
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
  );
}
