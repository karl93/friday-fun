import React from 'react';

interface ActorButtonsProps {
  actors: string[];
  correctActor: string; //actor to compare button press with
}

const ActorButtons: React.FC<ActorButtonsProps> = ({ actors, correctActor }) => {
  const handleButtonClick = (actor: string) => {
    if (actor === correctActor) {
      alert("Correct! You selected the right actor.");
      window.location.reload();
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
