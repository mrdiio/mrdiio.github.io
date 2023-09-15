export default function HeadingSection({ title }) {
  return (
    <div className="my-10">
      <div className="heading-sec">{title}</div>
      <hr className="w-20 h-1.5 my-5 mx-auto bg-gray-100 border-0 rounded dark:bg-yellow-400"></hr>
    </div>
  );
}
