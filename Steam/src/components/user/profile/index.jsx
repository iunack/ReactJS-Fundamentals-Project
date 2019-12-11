import React from "react";
import { useParams } from "react-router-dom";
function Profile(props) {
  let { id } = useParams();

  return (
    <div>
     My Profile
    </div>
  );
}

export default Profile;
