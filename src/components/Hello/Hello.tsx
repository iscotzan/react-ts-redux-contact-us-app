// src/components/Hello.tsx

import * as React from 'react';
import './Hello.css';
import ActionButton from "../actionButton/actionButton";
export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <ActionButton className="decrementButton" onClick={onDecrement} buttonText={"-"} />
        <ActionButton className="incrementButton" onClick={onIncrement} buttonText={"+"} />
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}



// class Hello extends React.Component<Props, object> {
//     render() {
//       const { name, enthusiasmLevel = 1 } = this.props;
  
//       if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//       }
  
//       return (
//         <div className="hello">
//           <div className="greeting">
//             Hello {name + getExclamationMarks(enthusiasmLevel)}
//           </div>
//         </div>
//       );
//     }
//   }