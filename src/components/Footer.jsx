import React from 'react'
import styled, {css} from 'styled-components'


const media = {
  max1024: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `,
};

const SectionContainer = styled.section`
  display: flex;
  height: 10rem;
  margin-top: 2rem;
  padding: 1.6rem 3rem;
  justify-content: space-between;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);

  ${media.max1024`
    display: block;
  `}
`;
const Container1 = styled.div`

  > p{
        font-size: 12px;
        color: gray;
    }
  > h6{
        margin-top: 2rem;
        color: gray;
    }
`;
const Container2 = styled.div`
    text-align: right;

  > p{
        margin-top: 0.6rem;
        font-size: 12px;
        color: gray;
    }
`;

function Footer() {
  return (
    <SectionContainer>
        <Container1>
            <h3>ClimateGuard</h3>
            <p>Your trusted source for climate change</p>
            <h6>ClimateGuard © 2024</h6>
        </Container1>
        <Container2>
            <h6>Help</h6>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Get in touch</p>
        </Container2>
    </SectionContainer>
  )
}

export default Footer
