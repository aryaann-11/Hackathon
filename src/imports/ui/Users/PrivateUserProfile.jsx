import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTracker } from "meteor/react-meteor-data";
import { UserProfileCollection } from "../../db/UserProfileCollection";
import {
  Container,
  Grid,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
const PrivateUserProfilePage = () => {
  const { user } = useAuth0();
  const current_profile = useTracker(() =>
    UserProfileCollection.findOne({ email: user.email })
  );
  const [bio, setBio] = useState("");
  const changeBio = (e) => {
    setBio(e.target.value);
  };
  if (current_profile) {
    setBio(current_profile.bio);
  }
  const submitBio = (e) => {
    e.preventDefault();
    if (current_profile) {
      UserProfileCollection.updateOne(
        { email: user.email },
        { $set: { bio: bio } },
        function (err) {
          if (err) {
            alert(err);
          } else {
            alert("Bio updated successfully");
          }
        }
      );
    } else {
      UserProfileCollection.insert(
        { email: user.email, bio: bio },
        function (err) {
          if (err) {
            alert(err);
          } else {
            alert("Bio updated successfully");
          }
        }
      );
    }
  };
  return (
    <>
      <Container maxWidth="md">
        <form onSubmit={submitBio}>
          <FormControl>
            <InputLabel htmlFor="bio">Your bio</InputLabel>
            <Input
              id="bio"
              aria-describedby="bio-helper-text"
              value={bio}
              onChange={changeBio}
            ></Input>
            <FormHelperText id="bio-helper-text">
              Tell us your name and why you consider yourself "green-minded".
              You may add any other thing you find pertinent
            </FormHelperText>
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            Update
          </Button>
        </form>
      </Container>
    </>
  );
};

export default PrivateUserProfilePage;
