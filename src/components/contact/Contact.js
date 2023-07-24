import React from 'react';
import { motion } from 'framer-motion';
import {
  ContactContainer,
  ContactTitle,
  ContactList,
  ContactItem,
  ContactLink,
} from './ContactStyles';

const Contact = () => {
  // Definicja animacji dla pojedynczego elementu listy kontaktów
  const itemAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <ContactContainer>
      <ContactTitle>Kontakt</ContactTitle>
      <ContactList>
        <motion.li
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <ContactLink href="tel:+48797694338">
            <i className="fas fa-phone-alt" />
            Telefon
          </ContactLink>
        </motion.li>
        <motion.li
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ContactLink href="mailto:wojciechlizurej@wp.pl">
            <i className="far fa-envelope" />
            Email
          </ContactLink>
        </motion.li>
        <motion.li
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactLink href="https://www.facebook.com/wojtek.lizurej">
            <i className="fab fa-facebook-f" />
            Facebook
          </ContactLink>
        </motion.li>
        <motion.li
          variants={itemAnimation}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ContactLink href="https://www.youtube.com/example">
            <i className="fab fa-youtube" />
            YouTube
          </ContactLink>
        </motion.li>
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;
