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
      >

      <h2>Kalisi</h2>
      <p>Email: kalisi@jmfamily.com</p>
      <p>Department: SET</p>
      <p>Skills: Good at dragon riding , administartion, etc</p>
      
    </Fragment>
  );
};

export default Profile;