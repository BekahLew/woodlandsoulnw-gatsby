import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components";

const EventItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const EventItem = styled.div`
  width: 30rem;
  border: 1px solid #efefef;
  padding: 1rem;
  margin: 1rem;
`

const EventImage = styled.img`
  max-width 100%;
`
const EventItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpEvents {
            edges {
              node {
                title
                slug
                excerpt
                content
                id
                featured_media {
                  source_url
                  alt_text
                }
              }
            }
          }
        }
      `}
      render={props => (
      <EventItemsWrapper>
        {props.allWordpressWpEvents.edges.map(eventItem => (
          <EventItem key={eventItem.node.id}>
            <h2>{eventItem.node.title}</h2>
            <EventImage
              src={eventItem.node.featured_media.source_url}
              alt={eventItem.node.featured_media.alt_text}
            />
            <div dangerouslySetInnerHTML={{ __html: eventItem.node.excerpt }} />
            <Link to={`/event/${eventItem.node.slug}`}>Read More</Link>
          </EventItem>
        ))}
      </EventItemsWrapper> )} />
  )
}

export default EventItems
