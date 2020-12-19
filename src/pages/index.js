import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'

function RootIndex(props) {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  // const posts = get(props, 'data.allContentfulBlogPost.edges')
  const [company] = get(props, 'data.allContentfulCompany.edges')

  return (
    <Layout location={props.location}>
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={company.node} />
        {/* <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div> */}
      </div>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulCompany(filter: {contentful_id: {eq: "4XvwaPGDWNCylZv9HdAkz6"}}) {
      edges {
        node {
          backgroundImages {
            title
            description
            fluid(resizingBehavior: FILL) {
              srcSet
              sizes
            }
            file {
              url
            }
          }
          donateLink
          email
          instagram
          name
          youtubeVideo
          title {
            title
          }
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`
