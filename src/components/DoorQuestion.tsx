import React, { useState } from 'react';

interface DoorQuestionProps {
  onSelectDoor: (door: string) => void;
}

const doors = [
  { label: 'ドア1', img: process.env.PUBLIC_URL + '/door1.png', openImg: process.env.PUBLIC_URL + '/door1_open.png' },
  { label: 'ドア2', img: process.env.PUBLIC_URL + '/door2.png', openImg: process.env.PUBLIC_URL + '/door2_open.png' },
  { label: 'ドア3', img: process.env.PUBLIC_URL + '/door3.png', openImg: process.env.PUBLIC_URL + '/door3_open.png' },
];

const DoorQuestion: React.FC<DoorQuestionProps> = ({ onSelectDoor }) => {
  const [openedDoor, setOpenedDoor] = useState<string>('');

  const handleSelect = (door: string) => {
    setOpenedDoor(door);
    setTimeout(() => {
      onSelectDoor(door);
    }, 800); // ドアが開いた演出後に次へ
  };

  return (
    <div className="container">
      <h2 className="question">どのドアを選びますか？</h2>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {doors.map((door) => (
          <div key={door.label} style={{ textAlign: 'center' }}>
            <img
              src={openedDoor === door.label ? door.openImg : door.img}
              alt={door.label}
              style={{
                width: '120px',
                height: '180px',
                border: openedDoor === door.label ? '4px solid #007bff' : '2px solid #ccc',
                borderRadius: '8px',
                cursor: openedDoor ? 'default' : 'pointer',
                transition: 'border 0.2s',
                opacity: openedDoor && openedDoor !== door.label ? 0.5 : 1,
              }}
              onClick={() => !openedDoor && handleSelect(door.label)}
            />
            <div>{door.label}</div>
          </div>
        ))}
      </div>
      {openedDoor && <p>ドアが開きました: {openedDoor}</p>}
    </div>
  );
};

export default DoorQuestion;