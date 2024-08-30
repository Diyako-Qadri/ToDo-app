import { TaskType } from "./types";
import {v4 as uuidv4} from "uuid"
export const defaultTasks: TaskType[] = [
    {
      id: uuidv4(),
      description: 'Go to the gym',
    },
    {
      id: uuidv4(),
      description: 'Hands in assignments',
    },
    {
      id: uuidv4(),
      description: 'Water the plants',
    },
  ];