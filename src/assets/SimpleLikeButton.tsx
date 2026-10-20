import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);
  if (status)
    return (
      <AiFillHeart color="#ff6b81" size={20} onClick={() => setStatus(false)} />
    );
  return <AiOutlineHeart size={20} onClick={() => setStatus(true)} />;
};

export default Like;
