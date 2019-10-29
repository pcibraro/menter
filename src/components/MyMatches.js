import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Mymatches = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <Fragment>
      <h2>My Mentors</h2>
      <p>John Snow</p>
      <p>Sansa Stark</p>
      <p>Tormund Giantsbane</p>
      <h2>My Mentees</h2>
      <p>Grey Worm</p>
      <p>Missandei</p>
      <p>Little Finger</p>
      
    </Fragment>
  );
};

export default Mymatches;