import React from "react"
import Layout from "../components/layout";
import styled from "styled-components";

const FeaturedImage = styled.img`
  max-width: 30rem;
  margin: 1rem 0;
`

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <div><strong>Date: </strong>  <span>{pageContext.acf.event_date}</span></div>
    <strong>Event Link: </strong>
    <a href={pageContext.acf.event_url} target="_blank" rel="noreferrer">
      {pageContext.acf.event_url}
    </a>
    <div>
      <FeaturedImage src={pageContext.featured_media.source_url} alt={pageContext.featured_media.alt_text} />
    </div>
    <div dangerouslySetInnerHTML={{__html: pageContext.content}}></div>
  </Layout>
)
