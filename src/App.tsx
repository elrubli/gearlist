import GEAR_QUESTIONS from './store/gearQuestions'
import type { GearQuestion } from './store/gearQuestions'
import './App.css'

const Question = ({label, choices}: GearQuestion) => {
  return <div>
    <div>{label}</div>
    <select>
      {choices.map(({label, value}, i) => {
        return <option key={i} value={value}>{label}</option>
      })}
    </select>
  </div>
}

const App = () => {
  return (
    <>
      <div>
        <h1>Questions</h1>
        {GEAR_QUESTIONS.map((question, i) => {
          return <Question {...question} />
        })}
      </div>
    </>
  )
}

export default App
