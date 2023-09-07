import HeadingSection from '../../components/HeadingSection';

export default function Projects() {
  return (
    <div className="relative flex justify-center items-center bg-red-200 h-[30vh] hero">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col items-center justify-center gap-4 text-gray-600">
          <HeadingSection title={'Project Page'} />
          <p>
            Excepteur sunt consequat sit Lorem duis aliqua cillum exercitation
            laborum nulla.
          </p>
        </div>
      </div>
    </div>
  );
}
