import GEAR_QUESTIONS from './store/gearQuestions'
import './App.css'

const App = () => {
  return (
    <>
      <div>
        <h1>Questions</h1>
        {GEAR_QUESTIONS.map(({label, choices}, i) => {
          return <div>
            <div>{label}</div>
            <select>
              {choices.map(({label, value}, i) => {
                return <option key={i} value={value}>{label}</option>
              })}
            </select>
          </div>
        })}
      </div>
    </>
  )
}

export default App
