import React from 'react';
import { Link } from 'gatsby';
import { Container, ThemeContext } from '../../common';
import Envelope from '../../../../static/about/envelope.svg';
import Phone from '../../../../static/about/phone.svg';
import Marker from '../../../../static/about/marker.svg';
import EnvelopeWhite from '../../../../static/about/envelope-white.svg';
import PhoneWhite from '../../../../static/about/phone-white.svg';
import MarkerWhite from '../../../../static/about/marker-white.svg';
import {
 Wrapper, Img, P, DetailsContainer, Text,
} from './styles';

const Details = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper as={Container}>
        <Text theme={theme}>
          {`I’m Ly, also known as keoem, I’m a self-taught Graphic and full stack
          developer. I'm really interested in Technology. Science including mathematics, physics
          science belong to my interests as well, you can know more about me by reading my `}
          {/* <Link to="/blog">articles</Link>. */}
        </Text>
        <Text theme={theme}>
          {"Currently I'm working remotely at "}
          <a href="https://enouvo.com/?ref=keoem" target="_blank" rel="noopener noreferrer">
            Enouvo IT Solutions
          </a>
          {' '}
          as a Front end developer.
        </Text>
        <Text theme={theme}>For business inquiries feel free to get in touch with me at:</Text>
        <DetailsContainer>
          <P theme={theme}>
            <Img src={theme === 'dark' ? EnvelopeWhite : Envelope} alt="email" />
            keoem@gmail.com
          </P>
          <P theme={theme}>
            <Img src={theme === 'dark' ? PhoneWhite : Phone} alt="phone" />
            +84336130814
          </P>
          <P theme={theme}>
            <Img src={theme === 'dark' ? MarkerWhite : Marker} alt="address" />
            Da Nang City, Viet Nam.
          </P>
        </DetailsContainer>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

export { Details };
