import React from 'react';

interface ActorButtonsProps {
  actors: string[];
}

const ActorButtons: React.FC<ActorButtonsProps> = ({ actors }) => {
  return (
    <div>
      {actors.map((actor, index) => (
        <button key={index}>{actor}</button>
      ))}
    </div>
  );
};

export default ActorButtons;
