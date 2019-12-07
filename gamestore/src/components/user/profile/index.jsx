import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../common/navbar";

function Profile(props) {
  let { id } = useParams();

  return (
    <div>
      <Navbar propss={props} />
      {id}
    </div>
  );
}

export default Profile;
