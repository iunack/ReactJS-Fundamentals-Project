import React from "react";
import { useParams } from "react-router-dom";

function Profile(props) {
  let { id } = useParams();
  
  return <div>{id}</div>;
}

export default Profile;
