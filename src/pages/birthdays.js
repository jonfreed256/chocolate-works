import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const BirthdayPage = props => (
  <Layout>
    <SEO title='Birthday Parties' />
    <div className='birthday-background'>
      <h1
        style={{
          textAlign: 'center'
        }}>
        Plan an Exciting and Worry Free Birthday Party
      </h1>
      <div className='row'>
        <div className='col-2'>
          <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        </div>
        <p className='col-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
          soluta similique eligendi enim expedita suscipit. Quod consequuntur,
          eos perspiciatis quisquam, dolorum repellendus deleniti maiores eaque
          tempora maxime iusto et!
        </p>
      </div>
      <div className='row'>
        <p className='col-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
          soluta similique eligendi enim expedita suscipit. Quod consequuntur,
          eos perspiciatis quisquam, dolorum repellendus deleniti maiores eaque
          tempora maxime iusto et!
        </p>
        <div className='col-2'>
          <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        </div>
      </div>
      <div className='row'>
        <div className='col-2'>
          <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        </div>
        <p className='col-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus
          soluta similique eligendi enim expedita suscipit. Quod consequuntur,
          eos perspiciatis quisquam, dolorum repellendus deleniti maiores eaque
          tempora maxime iusto et!
        </p>
      </div>
    </div>
  </Layout>
);

export default BirthdayPage;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Birthday-Parties.jpg" }) {
      ...fluidImage
    }
    imageTwo: file(relativePath: { eq: "workshop-woman-kids.jpg" }) {
      ...fluidImage
    }
    imageThree: file(relativePath: { eq: "banner2-plan-party.jpg" }) {
      ...fluidImage
    }
  }
`;
