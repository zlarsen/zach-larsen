import React from 'react';
import styled from 'styled-components';

import { Layout, Link, PostLink, SEO, WaveSection } from 'src/components';
import { get } from 'src/utils';

const H3 = styled.h3`
  margin-top: 0;
`;

const IndexPage = ({ data }) => {
  const edges = get(data, 'allMarkdownRemark', 'edges') || [];
  return (
    <Layout>
      <SEO title="Home" />
      <WaveSection>
        <h1 className="intro-title">Hello!</h1>
        <p>
          I'm Zach Larsen, a software engineer currently working at <Link to="https://genbloq.com/">Genbloq</Link>. I build highly scaleable
          web apps, contribute to open source, and disc golf in my free time!
        </p>
        <br />
        <p>
          <Link to="/blog" button>
            All Posts
          </Link>
          &nbsp;
          <Link to="/resume" secondary button>
            Resume
          </Link>
        </p>
      </WaveSection>
      {edges.length ? (
        <>
          <H3>Featured Posts</H3>
          {edges.map(edge => (
            <PostLink key={edge.node.id} post={edge.node} />
          ))}
        </>
      ) : null}
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
      filter: { frontmatter: { tags: { in: ["featured"] } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            subtitle
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;
