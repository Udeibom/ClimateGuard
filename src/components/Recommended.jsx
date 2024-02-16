import React from 'react'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 11px;
  color: #333;
`;

const media = {
  max1024: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `,
};

const SectionContainer = styled.section`
  margin-top: 4rem;

  > h3 {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const Container = styled.div`
  display: flex;

  ${media.max1024`
  display: block;
`}
`;

const FlexItem1 = styled.div`
  flex: 1;
  height: 17rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);
  margin-right: 1rem;

  > img {
    height: 11rem;
    width: 100%;
    border-radius: 1rem;
  }

  > h4 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 10px;
    color: #092745;
  }

  > h5 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 6px;
    color: #c9d0d7;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    color: #021222;
  }

  ${media.max1024`
  margin-right: 0;
  margin-bottom: 1rem;
`}
`;

const FlexItem2 = styled.div`
  flex: 1;
  height: 17rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);
  margin-right: 1rem;

  > img {
    height: 11rem;
    width: 100%;
    border-radius: 1rem;
  }

  > h4 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 10px;
    color: #092745;
  }

  > h5 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 6px;
    color: #c9d0d7;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    color: #021222;
  }

  ${media.max1024`
  margin-right: 0;
  margin-bottom: 1rem;
`}
`;

const FlexItem3 = styled.div`
  flex: 1;
  height: 17rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);
  margin-right: 1rem;

  > img {
    height: 11rem;
    width: 100%;
    border-radius: 1rem;
  }

  > h4 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 10px;
    color: #092745;
  }

  > h5 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 6px;
    color: #c9d0d7;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    color: #021222;
  }

  ${media.max1024`
  margin-right: 0;
  margin-bottom: 1rem;
`}
`;

const FlexItem4 = styled.div`
  flex: 1;
  height: 17rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);
  margin-right: 1rem;

  > img {
    height: 11rem;
    width: 100%;
    border-radius: 1rem;
  }

  > h4 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 10px;
    color: #092745;
  }

  > h5 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 6px;
    color: #c9d0d7;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    color: #021222;
  }

  ${media.max1024`
  margin-right: 0;
  margin-bottom: 1rem;
`}
`;

const FlexItem5 = styled.div`
  flex: 1;
  height: 17rem;
  border: none;
  border-radius: 1rem;
  padding: 0.5rem;
  box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.5);

  > img {
    height: 11rem;
    width: 100%;
    border-radius: 1rem;
  }

  > h4 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 10px;
    color: #092745;
  }

  > h5 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 6px;
    color: #c9d0d7;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }

  > p {
    color: #021222;
  }
`;

function Recommended() {
  return (
    <SectionContainer>
        <h3>Recommended Articles</h3>
        <Container>
            <FlexItem1>
              <img src="./images/understanding_climate.avif" alt="Understanding Climate - An educational illustration about climate science" />
              <h4>Understanding Climate</h4>
              <h5>ClimateGuard</h5>
              <div>
                <p>Read now</p>
                <StyledIcon icon={faGreaterThan} />
              </div>
            </FlexItem1>
            <FlexItem2>
              <img src="./images/weather_pattern_explained.webp" alt="Weather Pattern Explained - An illustration showing different weather patterns and their explanations" />
              <h4>Weather Patterns Explained</h4>
              <h5>ClimateGuard</h5>
              <div>
                <p>Read now</p>
                <StyledIcon icon={faGreaterThan} />
              </div>
            </FlexItem2>
            <FlexItem3>
              <img src="./images/Environmental_impact_on.avif" alt="Environmental Impact On..." />
              <h4>Environmental Impact on</h4>
              <h5>ClimateGuard</h5>
              <div>
                <p>Read now</p>
                <StyledIcon icon={faGreaterThan} />
              </div>
            </FlexItem3>
            <FlexItem4>
              <img src="./images/nature_conservation_and.avif" alt="Nature Conservation" />
              <h4>Nature Conservation and</h4>
              <h5>ClimateGuard</h5>
              <div>
                <p>Read now</p>
                <StyledIcon icon={faGreaterThan} />
              </div>
            </FlexItem4>
            <FlexItem5>
              <img src="./images/renewable_energy.avif" alt="" />
              <h4>Renewable Energy</h4>
              <h5>ClimateGuard</h5>
              <div>
                <p>Read now</p>
                <StyledIcon icon={faGreaterThan} />
              </div>
            </FlexItem5>
        </Container>
    </SectionContainer>
  )
}

export default Recommended
