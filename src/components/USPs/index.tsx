'use client';
import { useState } from 'react';
const USPs = () => {
  const [show, setShow] = useState<boolean>(true);
  const SellingPoints: string[] = [
    'Organise your day',
    "Don't forget things",
    'Prioritize!!',
  ];
  return (
    <div className="bg-YellowBg p-4 ">
      {show && (
        <ul>
          {SellingPoints.map((item, index) => (
            <li className="text-xl text-white" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setShow(!show)}
        className="text-white border-2 border-yellow-200 p-4 bg-yellow-700 rounded-md"
      >
        Hide UPSs
      </button>
    </div>
  );
};

export default USPs;
