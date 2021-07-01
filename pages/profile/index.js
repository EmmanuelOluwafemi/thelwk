import React from "react";
import styled from "styled-components";
import { LoggedHeader } from "../../components/Header";
import LeftSide from "../../parts/profile/LeftSide";
import RightSide from "../../parts/profile/RightSide";

const Profile = () => {
  return (
    <>
      <LoggedHeader />
      <ProfileStyles>
        <LeftSide />
        <RightSide />
      </ProfileStyles>
    </>
  );
};

export default Profile;
const ProfileStyles = styled.div`
  width: 100%;
  height: 85vh;
  background: #e1f6ff;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 769px) {
    display: block;
    height: auto;
  }
`;
