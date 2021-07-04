import React, { useState } from "react";
import styled from "styled-components";
import { LoggedHeader } from "../../components/Header";
import LeftSide from "../../parts/profile/LeftSide";
import RightSide from "../../parts/profile/RightSide";

const Profile = () => {
  // Mobile Drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <LoggedHeader />
      <ProfileStyles>
        <LeftSide showDrawer={showDrawer} />
        <RightSide onClose={onClose} visible={visible} />
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
