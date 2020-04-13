import React from "react"

// Gatsby
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"

// Styles
import { StyledGrid } from "../styles/StyledGrid"

const GetHelp = () => {
  return (
    <StaticQuery
      query={getHelpQuery}
      render={data => {
        const getHelp = data.getHelp
        const contentBlock1 = data.getHelp.contentBlocks[0]
        const contentBlock2 = data.getHelp.contentBlocks[1]

        return (
          <StyledGrid className="main-content">
            <HelmetDatoCms>
              <script src="https://services.cognitoforms.com/scripts/embed.js"></script>
            </HelmetDatoCms>
            <div className="box a">
              <h1 className="heading">{contentBlock1.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock1.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>

            <div className="box b">
              <h1 className="heading">{contentBlock2.heading}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: contentBlock2.bodyNode.childMarkdownRemark.html,
                }}
              />
            </div>

            <div className="box c">
              <div
                dangerouslySetInnerHTML={{
                  __html: getHelp.cognitoFormEmbedNode.childMarkdownRemark.html,
                }}
              />
            </div>
          </StyledGrid>
        )
      }}
    />
  )
}

export const getHelpQuery = graphql`
  query {
    getHelp: datoCmsGetHelp {
      contentBlocks {
        ... on DatoCmsContentBlock {
          id
          heading
          callOut
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      cognitoFormEmbedNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default GetHelp
