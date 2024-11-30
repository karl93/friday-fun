import React, { useState, useEffect } from 'react';

const QuestionsAndAnswers = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Accessed from public folder
    const url = '/quotes.json';
    
    fetch(url)
      .then((response) => response.json())  // Parse the JSON data
      .then((jsonData) => {
        setData(jsonData);  // Store data in state
        setLoading(false);   // Stop loading
      })
      .catch((error) => {
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

  return (
    <div>
      <h1>Loaded Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Pretty print JSON */}
    </div>
  );
};

export default QuestionsAndAnswers;
