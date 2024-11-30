import './App.css';
import FridayFunTitle from './components/HelloWorld';
import HelloWorld from './components/HelloWorld'
import List from './components/List'
import { FC } from 'react'
import QuizQuote from './components/QuizQuote';

const quote = "Potatoes... boil em mash em put em in a stew!"

const App: FC = () => {
  return (
    <div className="App">
      <FridayFunTitle />
      <QuizQuote text={quote} />
    </div>
  );
}

export default App;