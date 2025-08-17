import React, { useState } from 'react';
import DoorQuestion from './DoorQuestion';
import NextQuestion from './NextQuestion';

const SurveyContainer: React.FC = () => {
  const [selectedDoor, setSelectedDoor] = useState<string | null>(null);
  const [step, setStep] = useState<number>(1);

  const handleDoorSelection = (door: string) => {
    setSelectedDoor(door);
    setStep(2);
  };

  const handleNextQuestion = () => {
    // Logic for handling the next question can be added here
    console.log('Proceeding to the next question...');
  };

  return (
    <div>
      {step === 1 && <DoorQuestion onSelectDoor={handleDoorSelection} />}
      {step === 2 && selectedDoor && (
        <NextQuestion selectedDoor={selectedDoor} onNext={handleNextQuestion} />
      )}
    </div>
  );
};

export default SurveyContainer;