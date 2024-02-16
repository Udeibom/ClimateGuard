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

const FlexItem = styled.div`
  flex: 1;
  padding: 0 1rem;

  ${media.max1024`
  padding: 0;
  margin-top: 1rem;
`}
`;

const FlexItem1 = styled.div`
  flex: 1;
  padding: 10px;
  position: relative;
  height: 21rem;
  background-image: url('./images/climate_change.jpg');
  border-radius: 1rem;

  > p {
    position: absolute;
    left: 10%;
    bottom: 10%;
    padding: 8px;
    border-radius: 50px;
    background-color: #eee;
    border: 1px solid #001F3F;
  }

  ${media.max1024`
  > p {
    left: 40%;
  }
`}
`;

const FlexItem2 = styled.div`
  flex: 1;
  padding: 10px;
  position: relative;
  height: 21rem;
  background-image: url('./images/environmental_image.webp');
  border-radius: 1rem;

  > p {
    position: absolute;
    left: 10%;
    bottom: 10%;
    padding: 8px;
    border-radius: 50px;
    background-color: #eee;
    border: 1px solid #001F3F;
  }

  ${media.max1024`
  margin-top: 1rem;

  > p {
    left: 40%;
  }
`}

`;


const BlockItem1 = styled.div`
  height: 11rem;
  padding: 10px;
  position: relative;
  background-image: url('./images/weather_pattern.webp');
  border-radius: 1rem;

  > p {
    position: absolute;
    left: 10%;
    bottom: 10%;
    padding: 8px;
    border-radius: 50px;
    background-color: #eee;
    border: 1px solid #001F3F;
  }

  ${media.max1024`
  height: 21rem;
  background-size: cover;
  background-repeat: no-repeat;

  > p {
    left: 40%;
  }
`}

`;

const BlockItem2 = styled.div`
height: 9rem;
padding: 10px;
margin-top: 1rem;
position: relative;
background-image: url('./images/air_pollution.webp');
border-radius: 1rem;

> p {
  position: absolute;
  left: 10%;
  bottom: 10%;
  padding: 8px;
  border-radius: 50px;
  background-color: #eee;
  border: 1px solid #001F3F;
}

${media.max1024`
height: 21rem;

> p {
  left: 40%;
}
`}

`;

const BlockItem3 = styled.div`
  height: 11rem;
  padding: 10px;
  position: relative;
  background-image: url('./images/nature_conservation.webp');
  border-radius: 1rem;

  > p {
    position: absolute;
    left: 10%;
    bottom: 10%;
    padding: 8px;
    border-radius: 50px;
    background-color: #eee;
    border: 1px solid #001F3F;
  }

  ${media.max1024`
  height: 21rem;
  background-size: cover;
  background-repeat: no-repeat;

  > p {
    left: 40%;
  }
  `}

`;

const BlockItem4 = styled.div`
height: 9rem;
padding: 10px;
margin-top: 1rem;
position: relative;
background-image: url('./images/renewable_energy.webp');
border-radius: 1rem;

> p {
  position: absolute;
  left: 10%;
  bottom: 10%;
  padding: 8px;
  border-radius: 50px;
  background-color: #eee;
  border: 1px solid #001F3F;
}

${media.max1024`
height: 21rem;

> p {
  left: 40%;
}
`}
`;

function Popular() {
  return (
    <SectionContainer>
      <h3>Popular Topics</h3>
    <Container>
      <FlexItem1>
        <p>Climate Change</p>
      </FlexItem1>
      <FlexItem>
        <BlockItem1>
          <p>Weather Pattern</p>
        </BlockItem1>
        <BlockItem2>
          <p>Air Pollution</p>
        </BlockItem2>
      </FlexItem>
      <FlexItem2>
        <p>Environmental Impact</p>
      </FlexItem2>
      <FlexItem>
        <BlockItem3>
          <p>Nature Conservation</p>
        </BlockItem3>
        <BlockItem4>
          <p>Renewable Energy</p>
        </BlockItem4>
      </FlexItem>
    </Container>
    </SectionContainer>
  )
}

export default Popular
