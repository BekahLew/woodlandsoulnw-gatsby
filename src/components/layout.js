/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import MainMenu from "./MainMenu";
import styled, { createGlobalStyle } from "styled-components";
import { StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Cinzel&family=Cinzel+Decorative&family=Lora:ital,wght@0,400;0,700;1,400;1,700&display=swap');
  body {
    font-family: 'Lora', serif;
    margin: 0;
    padding: 0;
    color: #4d4440;
    background: #eee;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Cinzel', sans-serif;
  }
`

const LayoutWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <>
  <StaticQuery query={graphql`
    {
      allWordpressWpFavicon {
        edges {
          node {
            url {
              source_url
            }
          }
        }
      }
    }
  `} render={props => <Helmet><link rel="icon" href={props.allWordpressWpFavicon.edges[0].node.url.source_url} /></Helmet>} />
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  </>
);

export default Layout
