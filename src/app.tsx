import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/app.css";

export type TAppProps = {
  activeSideBar: boolean;
  setActiveSideBar: (activeSideBar: boolean) => void;
  toggleSideBar: () => void;
};

export default function App(props: TAppProps) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        props.setActiveSideBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [props.setActiveSideBar]);
  return (
    <Router>
      <PageContainer>
        <ToggleButton
          onClick={props.toggleSideBar}
          activeSideBar={props.activeSideBar}
        >
          {props.activeSideBar ? "✕" : "☰"}
        </ToggleButton>

        <SideNavBar {...props} />
        <ContentWrapper {...props}>
          <Switch>
            <Route path="/discover" component={Discover} {...props} />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const PageContainer = styled.main`
  display: flex;
  border: 8px solid pink;
  min-height: 100vh;
`;

const ContentWrapper = styled.main<{ activeSideBar: boolean }>`
  flex-grow: 1;
  margin-left: 260px;
  transition: margin-left 0.3s ease-in-out;
  border: 4px solid red;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const ToggleButton = styled.button<{ activeSideBar: boolean }>`
  position: fixed;
  top: 10px;
  background: none;
  border: none;
  font-size: 50px;
  color: black;
  cursor: pointer;
  transition: left 0.3s ease-in-out, right 0.3s ease-in-out;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    ${({ activeSideBar }) =>
      activeSideBar
        ? css`
            /* right: 10px;
            left: auto; */
            left: 260px;
            right: auto;
          `
        : css`
            left: 35px;
            right: auto;
          `}
  }
`;
