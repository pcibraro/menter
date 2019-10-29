import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const SignUp = () => {
//   const { loading, user } = useAuth0();

//   if (loading || !user) {
//     return (
//       <div>Loading...</div>
//     );
//   }

  return (
    <Fragment>
<form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="lname">Department</label>
    <input type="text" id="lname" name="Department" placeholder="Your Department..">

    <label for="subject">Skills</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    <label for="subject">Aspirations</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
    <label for="subject">Willing to</label>
    <p>Please select what you looking for :</p>
  <input type="radio" name="Mentor" value="Mentor"> Mentor<br>
  <input type="radio" name="Mentee" value="Mentee"> Mentee<br>
  <input type="radio" name="Neither" value="Neither"> Neither<br>
  <input type="radio" name="Both" value="Both"> Both<br>

    <input type="submit" value="Submit">
  </form>
    </Fragment>
  );
};

export default SignUp;