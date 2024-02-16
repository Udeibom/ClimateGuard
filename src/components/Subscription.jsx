import React from 'react'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';


const media = {
  max1024: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `,
};

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2.3rem;
  color: #000000;
  margin-right: 1rem;
  

  ${media.max1024`
    margin-right: 0;
  `}
`;

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  padding: 1.1rem 1.7rem;
  border-radius: 1rem;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);

  ${media.max1024`
  display: block;
  text-align: center;
  `}

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Container2 = styled.div`

  > p{
    font-size: 13px;
    color: gray;
  }
`;

const Container1 = styled.div`
  text-align: center;

  ${media.max1024`
    text-align: center;
    justify-content: center;
  `}

  > div{
    border: 2px solid gray;
    border-radius: 2rem;
    padding: 0.5rem 1rem;

    > p{
      font-size: 12px;
      color: gray;
    }

    ${media.max1024`
      margin-top: 1rem;
      margin-left: 30%;
      width: 40%;
    `}
  }
`;


function Subscription() {
  return (
    <SectionContainer>
        <Container>
         <StyledIcon icon={faHand} />
         <Container2>
            <h5>Support ClimateGuard</h5>
            <p>Subscribe to our newsletter to receive exclusive updates on climate change 
              and it's effect on our ecosystem
            </p>
         </Container2>
        </Container>
        <Container1>
         <div>
          <p>Subscribe to Newsletter</p>
         </div>
        </Container1>
    </SectionContainer>
  )
}

export default Subscription
