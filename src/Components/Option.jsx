import { handelToClick } from '../JsFile/Remove'

const Option = ({ option, correctAnswer }) => {
  return (
    <div>
      <div>
        <div className="form-check bg-gray-200 hover:bg-green-200 text-black w-52 md:w-full py-3 px-5 rounded ">
          <label
            className="form-check-label  text-center justify-self-start items-center flex md:gap-5 gap-2 "
            onClick={() => handelToClick(option, correctAnswer)}
          >
            <input
              type="radio"
              name={correctAnswer}
              className="form-check-input flex-none  md:w-5 md:h-5"
            />
            <h1 className="flex-initial items-center md:w-96"> {option}</h1>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Option
