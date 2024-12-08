import React from 'react';

interface ActorButtonsProps {
  actors: string[];
  correctActor: string; //actor to compare button press with
  onCorrectAnswer: () => void;
}

const ActorButtons: React.FC<ActorButtonsProps> = ({ actors, correctActor, onCorrectAnswer }) => {
  const handleButtonClick = (actor: string) => {
    if (actor === correctActor) {
      alert("Correct! You selected the right actor.");
      onCorrectAnswer();  // Increment the correct answer counter
    } else {
      alert("Incorrect. Try again!");
    }
  };

  return (
    <div>
      {actors.length > 0 ? (
        actors.map((actor, index) => (
          <button key={index} onClick={() => handleButtonClick(actor)}>
            {actor}
          </button>
        ))
      ) : (
        <p>No actors available</p>
      )}
    </div>
  );
};

export default ActorButtons;
