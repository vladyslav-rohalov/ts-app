import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from 'react';

// useState
export function State() {
  const [value, setValue] = useState(null);
  const [unknownValue, setUnknownValue] = useState<number | undefined>(
    undefined
  );
  const [unknownValue2, setUnknownValue2] = useState<Array<number>>([]);

  interface IUser {
    name: string;
    age?: number;
  }

  const [iValue, setIValue] = useState<IUser>({ name: 'name' });
}

// useRef
export function Ref() {
  const ref1 = useRef<HTMLElement>(null!);
  const ref2 = useRef<HTMLElement | null>(null);
}

//useContext
export function Context() {
  interface ITheme {
    backgroundColor: string;
    color: string;
  }

  const ThemeContext = createContext<ITheme>({
    backgroundColor: 'black',
    color: 'white',
  });

  const themeContext = useContext<ITheme>(ThemeContext);
}

//useRdecer
enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  count: number;
}

function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        value: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        value: state.count - payload,
      };
    default:
      return state;
  }
}

export const CounterReducer: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 5 })}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 5 })}
      >
        +
      </button>
    </div>
  );
};

//useCalback

function CallbackComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Click me</button>;
}
