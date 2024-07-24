import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import { TAppProps } from "../../app";

interface NavIconProps {
  arrow?: boolean;
  search?: boolean;
}

export default function SideNavBar({
  activeSideBar,
  toggleSideBar,
}: TAppProps) {
  // const [activeSideBar, setActiveSideBar] = useState(false);

  // /* Write the necessary functions to show/hide the side bar on mobile devices */

  // const toggleSideBar = () => {
  //   setActiveSideBar(!activeSideBar);
  // };

  return (
    <>
      <SideNavBarCont activeSideBar={activeSideBar}>
        {/* Implement a hamburger icon slide in effect for mobile devices */}
        <SideNavMainLink
          className="menu_nav_link main_nav_link"
          to="/"
          activeClassName="active"
          exact
        >
          Wesley
          {/* Add types for the props of 'NavIcon' */}
          <NavIcon arrow></NavIcon>
        </SideNavMainLink>
        <SideNavMainLink
          className="menu_nav_link"
          to="/discover"
          activeClassName="active"
        >
          Discover
          <NavIcon search></NavIcon>
        </SideNavMainLink>
        <SideNavHeader>
          <HeaderText>Watched</HeaderText>
        </SideNavHeader>
        <NavLink
          className="menu_nav_link"
          to="/watched/movies"
          activeClassName="active"
        >
          Movies
        </NavLink>
        <NavLink
          className="menu_nav_link"
          to="/watched/tv-shows"
          activeClassName="active"
        >
          Tv Shows
        </NavLink>
        <SideNavHeader>
          <HeaderText>Saved</HeaderText>
        </SideNavHeader>
        <NavLink
          className="menu_nav_link"
          to="/saved/movies"
          activeClassName="active"
        >
          Movies
        </NavLink>
        <NavLink
          className="menu_nav_link"
          to="/saved/tv-shows"
          activeClassName="active"
        >
          Tv Shows
        </NavLink>
      </SideNavBarCont>
    </>
  );
}

const SideNavBarCont = styled.div<{ activeSideBar: boolean }>`
  position: fixed;
  z-index: 9;
  width: 260px;
  height: 100%;
  padding: 35px;
  background-color: ${colors.sideNavBar};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  border: 3px dashed white;

  @media screen and (max-width: 768px) {
    transform: ${({ activeSideBar }) =>
      activeSideBar ? "translateX(0)" : "translateX(-100%)"};
  }
`;

const SideNavMainLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  align-items: center;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
  border: 3px solid orange;
`;

// const SideNavMainLink = styled(Link)`
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 1.6em;
//   font-weight: 700;
//   color: white;
//   border: 3px solid orange;
// `;

const NavIcon = styled.div<NavIconProps>`
  width: 29px;
  height: 29px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${(props) =>
    props.arrow
      ? `url(${Arrow})`
      : props.search
      ? `url(${SearchWhite})`
      : "none"};
`;

const SideNavHeader = styled.div``;

const HeaderText = styled.div``;

const NavLink = styled(Link)`
  display: block;
  border: 3px dotted green;
`;
