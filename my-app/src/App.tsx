import './App.css';
import FridayFunTitle from './components/Title';
import { FC } from 'react'
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