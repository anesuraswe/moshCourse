import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxChars: number;
  onClick: () => void;
}
const ExpandableText = ({ children, maxChars, onClick }: Props) => {
  return (
    <div>
        {children}
      <button onClick={onClick}>See more</button>
    </div>
  );
};

export default ExpandableText;
