import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
          query {
            allStrapiFrequentlyAskedQuestions {
              nodes {
                meta {
                  pagination {
                    total
                  }
                }
                data {
                  attributes {
                    answers
                    questions
                    createdAt
                  }
                  id
                }
              }
            }
          }
      `)
    console.log(data)
    console.log(data.allStrapiFrequentlyAskedQuestions.nodes[0].data)

 return(
    <Layout pageTitle="Home Page" >
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      {data.allStrapiFrequentlyAskedQuestions.nodes[0].data.map((item, index) => (
        <div>
          <p key={item.id}>{item.attributes.questions}</p>
          <p key={item.id}>{item.attributes.answers}</p>
        </div>
      ))}
    </Layout>

 )
}

// Step 3: Export your component
export default IndexPage
