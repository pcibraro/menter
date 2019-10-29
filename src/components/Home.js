import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
const Home = () => {
    const { loading, user } = useAuth0();
  
    if (loading || !user) {
      return (
        <div>Loading...</div>
      );
    }
  
    return (
      <Fragment>
        <li>
          <label>
            <input
              type="radio"
              value="mentee"
            />
            Mentee
          </label>
        </li>
      </Fragment>
    );
  };

export default Home;