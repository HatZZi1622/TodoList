import { toBeInvalid } from '@testing-library/jest-dom/dist/matchers';
import React, { createContext, useReducer, useContext, useRef } from 'react';

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const TodoNextIdContext = createContext(null);

function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map((todo) =>
        todo.id === action.id ? { ...toBeInvalid, done: !todo.done } : todo,
      );
    case 'REMOVE':
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

const initialTodos = [
  { id: 1, text: '기상시간 7:00', done: true },
  { id: 2, text: '출근하기', done: true },
  { id: 3, text: '점심 사가기', done: false },
];

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5);

  return;
}
