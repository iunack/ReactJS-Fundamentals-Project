import React, {useContext} from "react";

import { AuthContext } from "../contexts/ContextWrapper";
function Home(props) {
  const [contextUser] = useContext(AuthContext);
  console.log(contextUser);
  
  return <div>HomePage</div>;
}

export default Home;
