import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
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
        <ContentWrapper>
          <Switch>
            <Route path="/discover" component={Discover} {...props} />
          </Switch>
        </ContentWrapper>
      </PageContainer>
    </Router>
  );
}

const ContentWrapper = styled.main`
  padding-left: 260px;

  /* @media screen and (max-width: 768px) {
    padding-left: 0;
    background-color: pink;
  } */
`;

const PageContainer = styled.main`
  overflow-x: hidden;
`;
