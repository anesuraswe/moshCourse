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

/**
 * 
import ExpandableText from "./components/ExpandableText";

function App() {
  
  return (
    <div>
      <ExpandableText maxChars={100} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        maxime quam laudantium aliquid! Assumenda laborum quis atque voluptatem
        fuga odio dolore odit debitis, accusamus nobis quibusdam soluta qui nam
        ipsa id quae ullam? Vero harum dignissimos hic dolorum, mollitia
        perspiciatis delectus obcaecati reprehenderit exercitationem laudantium
        itaque commodi et doloremque non possimus ipsum, sequi nulla libero
        excepturi tempora nemo vitae fugit veniam blanditiis. Earum ab saepe
        modi nesciunt, vero enim maiores iure, placeat pariatur numquam
        excepturi dolor fuga velit explicabo rerum! Dicta tempora, qui excepturi
        unde eum ex itaque voluptatibus architecto eaque ipsa deleniti expedita
        exercitationem fugit earum delectus quos nostrum?
      </ExpandableText>{" "}
    </div>
  );
}

export default App;
 */