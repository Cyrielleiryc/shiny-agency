import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)

  const previousQuestion = (actualNumber) => {
    return actualNumber === 1 ? '/survey/1' : `/survey/${actualNumber - 1}`
  }

  const nextQuestion = (actualNumber) => {
    return actualNumber === 10 ? '/results' : `/survey/${actualNumber + 1}`
  }

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={previousQuestion(questionNumberInt)}>Précédent</Link>
      <Link to={nextQuestion(questionNumberInt)}>Suivant</Link>
    </div>
  )
}

export default Survey
