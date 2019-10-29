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
      <h2>John Snow</h2>
      <p>Email: Johnsnow@jmfamily.com</p>
      <p>Department: JMA</p>
      <p>Skills: ASP.NET, Devops</p>

      <h2>Kalisi</h2>
      <p>Email: kalisi@jmfamily.com</p>
      <p>Department: SET</p>
      <p>Skills: Good at dragon riding , administartion, etc</p>

      <li>
          <label>
            <input
              type="radio"
              value="Like"
            />
            Like
          </label>
        </li>

        <li>
          <label>
            <input
              type="radio"
              value="Dislike"
            />
            Dislike
          </label>
        </li>
   </Fragment>
  );
};

export default Profile;