import { Link } from 'react-router-dom';
import '@/assets/css/Hero.css';
import { HiOutlineArrowDown } from 'react-icons/hi2';

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center h-screen hero">
      <div className="container px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl text-gray-600 font-bold text-start w-full">
            Hi, my name is Dio.
          </span>
          <div className="pt-7 text-2xl text-gray-600 text-left w-full">
            Ut laboris consectetur cillum ad ut veniam amet cillum fugiat nulla.
            Cillum esse incididunt culpa occaecat elit id sint sint. Nulla
            voluptate consectetur cillum consequat mollit irure tempor laboris
            et.
          </div>

          <div className="w-full">
            <div className="pt-10 flex justify-start">
              <Link
                to={'projects'}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-10 rounded-lg"
              >
                My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 pb-5 flex items-center justify-center">
        <Link
          to={'#about'}
          className="border border-gray-600 p-2 rounded-full shadow cursor-pointer"
        >
          <HiOutlineArrowDown className="text-2xl text-gray-600" />
        </Link>
      </div>
    </div>
  );
}
