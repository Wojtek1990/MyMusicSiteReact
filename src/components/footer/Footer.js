import React from 'react';
import { FooterContainer, FooterText, FooterLink, FooterIconLink } from './FooterStyles';
import { FaFacebook, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Znajdź nas: 
      </FooterText>
      <FooterIconLink href="https://www.facebook.com/wojtek.lizurej" target="_blank">
        <FaFacebook />
      </FooterIconLink>
      <FooterIconLink href="https://www.youtube.com/@wojteklizurej2358" target="_blank">
        <FaYoutube />
      </FooterIconLink>
      <FooterIconLink href="tel:+48797694338" target="_blank">
        <FaPhone />
      </FooterIconLink>
      <FooterIconLink href="mailto:wojciechlizurej@wp.pl" target="_blank">
        <FaEnvelope />
      </FooterIconLink>
    </FooterContainer>
  );
};

export default Footer;
