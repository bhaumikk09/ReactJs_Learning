import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const Like = () => {
  const [status, setStatus] = useState(false);

  if (status) {
    return (
      <AiFillLike color="#ff6b81" size={30} onClick={() => setStatus(false)} />
    );
  } else {
    return <AiOutlineLike size={30} onClick={() => setStatus(true)} />;
  }
};

export default Like;
