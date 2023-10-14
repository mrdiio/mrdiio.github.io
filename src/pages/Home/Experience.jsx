import { HiMapPin } from 'react-icons/hi2';
import HeadingSection from '../../components/HeadingSection';

export default function Experience() {
  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Tanjungpura University',
      location: 'Pontianak, Indonesia',
      date: '2018 - Present',
      description:
        'I work at the Information and Communication Technology Unit of Tanjungpura University as a software developer since 2019. I handle databases using MySQL and create applications using various programming languages such as PHP, NodeJS, Flutter, and others. The applications I have developed are both web-based and mobile. I have also created microservices to process data that can integrate with existing systems at Tanjungpura University.',
      tech: [
        'PHP',
        'Javascript',
        'Node.JS',
        'Dart',
        'HTML5',
        'CSS3',
        'MySQL',
        'Docker',
        'Git',
      ],
    },
    // {
    //   title: 'Full-Stack Developer',
    //   company: 'Universitas Tanjungpura',
    //   location: 'Pontianak, Indonesia',
    //   date: '2018 - Present',
    //   description:
    //     'Fugiat ea labore aute elit sint ad adipisicing ut incididunt anim laborum mollit ad nulla. Labore nisi reprehenderit fugiat irure deserunt irure. Sit mollit et incididunt aute dolore enim cupidatat.',
    //   tech: [
    //     'PHP',
    //     'Javascript',
    //     'Node.JS',
    //     'Dart',
    //     'HTML5',
    //     'CSS3',
    //     'MySQL',
    //     'Docker',
    //     'Git',
    //   ],
    // },
  ]

  return (
    <div id="experience" className="py-24 bg-gray-200/50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection title="Work Experience" />

          <div className="container flex flex-col items-center gap-5">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="grid sm:grid-cols-8 gap-4 lg:gap-2 p-5 w-7/8 lg:w-3/6 md:w-full hover:bg-gray-300/50 hover:rounded-lg hover:shadow-md transition duration-200"
              >
                <div className="sm:col-span-2">
                  <div className="text-gray-400 mt-1">
                    <header className="text-sm font-semibold uppercase tracking-wide">
                      {exp.date}
                    </header>
                  </div>
                </div>

                <div className="sm:col-span-6 prose">
                  <h3 className="leading-tight">
                    <div className="text-gray-600 font-semibold">
                      {exp.title}
                    </div>
                    <div className="text-gray-400 text-lg font-medium">
                      {exp.company}
                    </div>
                    <div className="text-gray-400 text-base font-normal flex items-center">
                      <HiMapPin className="inline-block mr-1" />
                      {exp.location}
                    </div>
                  </h3>
                  <p className="text-gray-600">{exp.description}</p>

                  <ul className="mt-2 flex flex-wrap list-none p-0 gap-2 text-white text-sm uppercase">
                    {exp.tech.map((tech, i) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
