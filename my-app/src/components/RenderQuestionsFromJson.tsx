import React, { useState, useEffect } from 'react';
import ActorButtons from './ActorsButtons';

interface Quote {
  quote: string;
  correct_actor: string;
  actors: string[];
  movie: string;
}

interface MovieQuotes {
  quotes: Quote[];
}

const QuestionsAndAnswers = () => {
  const [data, setData] = useState<MovieQuotes| null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Accessed from public folder
    const url = '/quotes.json';
    
    fetch(url)
      .then((response) => response.json())  // Parse the JSON data
      .then((jsonData: MovieQuotes) => {
        setData(jsonData);  // Store data in state
        setLoading(false);   // Stop loading
      })
      .catch((error) => {
        console.log(error);
        setError(error);  // Handle error
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  const randomNum = Math.floor(Math.random() * (data?.quotes.length || 1))

  return (
    <div>
      <h1>{data?.quotes[randomNum].movie}</h1>
      <h2>Quote : {data?.quotes[randomNum].quote}</h2>
      <ActorButtons actors={data?.quotes[randomNum].actors || []} correctActor={data?.quotes[randomNum].correct_actor || "undefined"} />
    </div>
  );
};

export default QuestionsAndAnswers;
