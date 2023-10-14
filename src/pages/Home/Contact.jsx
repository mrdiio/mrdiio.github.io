import { Link } from 'react-router-dom'
import HeadingSection from '../../components/HeadingSection'

export default function Contact() {
  return (
    <div id="contact" className="py-10 bg-gray-200/50">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <HeadingSection title="Contact" />
          <div className="">
            <h1>You can contact me at:</h1>
            <ul className="list-disc">
              <li>
                <span className="font-semibold">Email : </span>{' '}
                dionatsir@gmail.com
              </li>
              <li>
                <span className="font-semibold">Github : </span>{' '}
                <Link to={'https://qgithub.com/mrdiio'} target="_blank">
                  github.com/mrdiio
                </Link>
              </li>
              <li>
                <span className="font-semibold">LinkedIn : </span>{' '}
                <Link to={'https://linkedin.com/in/mrdiio'} target="_blank">
                  linkedin.com/in/mrdiio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
