import { ReactNode } from "react";

export enum AlertType {
  DANGER = 'red',
  SUCCESS = 'green',
  INFO = 'blue',
}

interface AlertProps {
  children: ReactNode;
  type: AlertType;
}

const Alert2 = ({ children, type }: AlertProps) => {
  return (
    <div
      className={`flex p-4 mb-4 text-sm text-${ type }-700 border border-blue-300 rounded-lg bg-${ type }-50 `}
      role="alert"
    >
      { children }
    </div>
  );
};

export default Alert2;
