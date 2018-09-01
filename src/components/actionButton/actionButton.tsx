// src/components/ActionButton.tsx

import * as React from "react";

export interface IProps {
  buttonText?: string;
  className?: string;
  onClick?: () => void;
}

function ActionButton({ buttonText, className, onClick }: IProps) {
  return (
    <button className={className} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default ActionButton;

