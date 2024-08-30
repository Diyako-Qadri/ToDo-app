'use client';

import { TaskType } from '@/utils/types';
import { HTMLInputTypeAttribute, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
type NewTAskProps = {
  updateFunction: (addTask: TaskType) => void;
};
const NewTask = ({ updateFunction }: NewTAskProps) => {
  const [inputValue, setInputValue] = useState<HTMLInputTypeAttribute>('');
  const handleClick = () => {
    if(inputValue !== ""){
      const userTask = { id: uuidv4(), description: inputValue };
      updateFunction(userTask)
    }
  };
  const handleChange = (e: {
    target: { value: SetStateAction<HTMLInputTypeAttribute> };
  }) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="flex flex-wrap flex-col bg-YellowBg my-4 p-4">
      <h4 className="text-white basis-5/5 text-2xl text-center">Create a new Task</h4>
      <label className='text-white' htmlFor="user-input">Enter a new task below</label>
      <input
        onChange={handleChange}
        id="user-input"
        className="p-4 px-8 m-4 "
        type="text"
        placeholder="Create a new Task..."
        value={inputValue}
      />
      <button data-testid="add-button" onClick={handleClick} className="bg-white  p-4 mx-4">Add Task</button>
    </div>
  );
};

export default NewTask;
