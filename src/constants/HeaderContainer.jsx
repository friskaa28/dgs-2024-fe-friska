// HeaderContainer.jsx
import React from 'react';
import HeaderView from "../components/HeaderView"; // adjust according to actual file location


const HeaderContainer = () => {
  // Logic can be handled here
  const logoSrc = "/public/icons/buddy-removebg-preview.png";
  const profileImgSrc = "/public/images/FRISKA FOTO_UNGU.png";
  const menuLinks = [
    { path: "/overview", label: "Overview" },
    { path: "/finance", label: "Finance" },
    { path: "/calendar", label: "Calendar" },
    { path: "/events", label: "Events" },
  ];

  return (
    <HeaderView logoSrc={logoSrc} profileImgSrc={profileImgSrc} menuLinks={menuLinks} />
  );
};

export default HeaderContainer;
