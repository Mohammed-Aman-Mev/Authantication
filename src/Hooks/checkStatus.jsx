import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CheckStatus = () => {
  const { user } = useSelector((state) => state.auth);

  const [login, setLogin] = useState(false);
  const [status, setStatus] = useState(true);

  //   console.log(user);
  useEffect(() => {
    if (user) {
      setLogin(true);
    } else {
      setLogin(false);
    }

    
    setStatus(true);
  });

  return { login, status };
};

// export default CheckStatus;
