import { Link } from 'react-router-dom'
import '@/assets/css/Hero.css'
import { HiOutlineArrowDown } from 'react-icons/hi2'

export default function Hero() {
  return (
    <div className="relative flex justify-center items-center h-screen hero">
      <div className="container px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <div className="text-4xl text-gray-600 font-bold text-start w-full">
            Hi, my name is Dio.
            {/* <span className="after:block after:mt-6 after:h-[5px] after:w-40 after:bg-yellow-400 after:rounded-[5px]"></span> */}
            <hr className="w-40 h-1.5 mt-6 bg-gray-100 border-0 rounded dark:bg-yellow-400"></hr>
          </div>
          <div className="pt-7 text-2xl text-gray-600 text-left w-full">
            I&lsquo;m a Fullstack Developer who loves to build things.
          </div>

          <div className="w-full">
            <div className="pt-10 flex justify-start">
              <Link
                to={'/#about'}
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-10 rounded-lg"
              >
                About Me
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
  )
}
