import './App.css';
import FridayFunTitle from './components/HelloWorld';
import HelloWorld from './components/HelloWorld'
import List from './components/List'
import { FC } from 'react'
import QuizQuote from './components/QuizQuote';
import QuestionsAndAnswers from './components/RenderQuestionsFromJson';

const App: FC = () => {
  return (
    <div className="App">
      <FridayFunTitle />
      <QuestionsAndAnswers />
    </div>
  );
}

export default App;