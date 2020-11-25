import { component as Component } from '../react/index.js';
import styled from '../styled-components/index.js';

const TitleStyled = styled.h1`
  color: orange;
  font-family: system-ui;
  font-size: 50px;
  text-shadow: 2px 2px 0 black;
  line-height: 100vh;
`;

const props = {
  message: 'No te rindas',
};

const Title = Component`<marquee> ${'message'} </marquee>`(props);

export default TitleStyled(Title);
