import { FC } from 'react'
interface QuizProp {
    text: string; // Ensures 'text' is always a string
  }
const QuizQuote: React.FC<QuizProp> = ({ text }) => <h3>{text}</h3>;
export default QuizQuote