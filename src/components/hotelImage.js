import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const BackgorundImg = styled(BackgroundImage)`
  height: 700px;
`

const HotelImage = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <BackgorundImg
      tag="section"
      fluid={image.sharp.fluid}
      fadeIn="soft"
    ></BackgorundImg>
  )
}

export default HotelImage
