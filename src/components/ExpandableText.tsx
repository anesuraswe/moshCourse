import { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100, }: Props) => {
  const [expanded, setExpand] = useState(false);
  if (children.length <= maxChars) return <p> {children}</p>;
  const text = expanded ? children : children.substring(0, maxChars);
  return (
    <div>
      {text}...{" "}
      <button onClick={() => setExpand(!expanded)}>
        {expanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;
