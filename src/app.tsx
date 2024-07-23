import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { css } from "styled-components";
import SideNavBar from "./components/sidenavbar";
import Discover from "./pages/discover";
import "./css/app.css";

export type TAppProps = {
  activeSideBar: boolean;
  toggleSideBar: () => void;
};

export default function App(props: TAppProps) {
  return (
    <Router>
      <PageContainer>
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

const ContentWrapper = styled.main<{ activeSideBar: boolean }>`
  flex-grow: 1;

  @media screen and (min-width: 769px) {
    margin-left: 260px;
  }

  @media screen and (max-width: 768px) {
    margin-left: ${({ activeSideBar }) => (activeSideBar ? "260px" : "0")};

    width: 100%;
  }
`;

const PageContainer = styled.main`
  overflow-x: hidden;
  display: flex;
  min-height: 100dvh;
`;
