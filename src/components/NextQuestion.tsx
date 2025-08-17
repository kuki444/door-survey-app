import React, { useState } from 'react';

interface NextQuestionProps {
  selectedDoor: string;
  onNext: () => void;
}

const NextQuestion: React.FC<NextQuestionProps> = ({ selectedDoor, onNext }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the answer submission logic here
    console.log(`Selected Door: ${selectedDoor}, Answer: ${answer}`);
    onNext(); // Proceed to the next question
  };

  return (
    <div>
      <h2>次の質問</h2>
      <p>選択したドア: {selectedDoor}</p>
      <form onSubmit={handleSubmit}>
        <label>
          あなたの意見は？
          <input type="text" value={answer} onChange={handleAnswerChange} />
        </label>
        <button type="submit">次へ</button>
      </form>
    </div>
  );
};

export default NextQuestion;