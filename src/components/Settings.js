import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
const Settings = () => {
    const { loading, user } = useAuth0();
  
    if (loading || !user) {
      return (
        <div>Loading...</div>
      );
    }
  
    return (
      <Fragment>
        <h2>Looking For</h2>
        <li>
          <label>
            <input
              type="radio"
              value="mentor"
            />
            Mentor
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value="mentee"
            />
            Mentee
          </label>
        </li>
        
            <h2>Skills and Aspirations</h2>
          
        
        
      </Fragment>
    );
  };

export default Settings;