import HeadingSection from '../../components/HeadingSection';

export default function Education() {
  const experience = [
    {
      title: 'Bachelor of Computer Science',
      university: 'Tanjungpura University',
      location: 'Pontianak, Indonesia',
      graduation: '2018',
      description:
        'Fugiat ea labore aute elit sint ad adipisicing ut incididunt anim laborum mollit ad nulla. Labore nisi reprehenderit fugiat irure deserunt irure. Sit mollit et incididunt aute dolore enim cupidatat.',
    },
  ];

  return (
    <div id="education" className="py-24">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection title="Education" />

          <div className="container flex flex-col items-center gap-5">
            {experience.map((exp, i) => (
              <div key={i} className="flex flex-col justify-center">
                <div className="text-2xl font-semibold text-gray-600 uppercase">
                  {exp.university}
                </div>
                <div className="">{exp.title}</div>
                <div className="">{exp.graduation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
