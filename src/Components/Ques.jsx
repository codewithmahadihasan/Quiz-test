import { removeTags } from '../JsFile/Remove'
import Option from './Option'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

const Ques = ({ questions }) => {
  const { question, options, correctAnswer } = questions

  //   const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    Swal.fire(`Answer : ${correctAnswer}`)
  }

  return (
    <div>
      <div className="flex flex-col w-8/12 mx-auto gap-2 p-6 rounded-xl shadow-md bg-gray-800 text-gray-100">
        <div className="flex justify-between items-start md:px-10">
          <h2 className="text-xl font-semibold leading-tight tracking-wide">
            {removeTags(question)}
          </h2>
          <button>
            <FontAwesomeIcon
              onClick={handleClick}
              className="text-blue-400 hover:text-blue-800 text-2xl"
              icon={faEye}
            />
          </button>
        </div>

        <div className="flex flex-col py-10 mx-auto gap-6 md:text-md">
          {options.map((option, idx) => (
            <Option
              key={idx}
              correctAnswer={correctAnswer}
              option={option}
            ></Option>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ques
