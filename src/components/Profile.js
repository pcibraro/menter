import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import MintorAPI from "../MintorAPI";

const Profile = () => {
  const { loading, user } = useAuth0();
  
  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }
  const api = new MintorAPI();

  const profile =  api.getProfile(user.user_id);

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Department: {profile.department}</p>
      <p>Skills: {profile.skills}</p>
      
    </Fragment>
  );
};

export default Profile;