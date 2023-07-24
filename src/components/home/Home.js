import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AboutUsContainer,
  AboutUsTitle,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  SectionImage,
} from './HomeStyles.js';
import image1 from '../../images/music.png';
import image2 from '../../images/background1.png';
import YoutubeVideo from '../aboutus/YoutubeVideo.js';

const Home = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  // Definicja animacji dla obrazków
  const imageAnimation1 = {
    scale: isHovered1 ? 1.02 : 1,
    boxShadow: isHovered1 ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none', // Dodajemy cień podczas animacji
    borderRadius: isHovered1 ? '10px' : '6px', // Zaokrąglamy rogi obrazka podczas animacji
  };

  const imageAnimation2 = {
    scale: isHovered2 ? 1.02 : 1,
    boxShadow: isHovered2 ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
    borderRadius: isHovered2 ? '10px' : '6px',
  };

  return (
    <AboutUsContainer>
      {/* Sekcja 1 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionContainer>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0 20px',
            }}
          >
            <SectionTitle>Nasza misja</SectionTitle>
            <SectionDescription>
              Jesteśmy zespołem doświadczonych muzyków, którzy pasjonują się grą
              na skrzypcach, trąbce i fortepianie oraz tworzeniem muzyki. Naszym celem jest
              dzielenie się tą pasją i nauka muzyki w przyjaznej atmosferze. Naszą
              misją jest propagowanie nauki gry na instrumentach oraz szerzenie
              miłości do muzyki. Chcemy inspirować ludzi do tworzenia i wyrażania emocji.
            </SectionDescription>
          </div>
          <motion.div
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            style={{
              ...imageAnimation1,
              width: '50%',
              height: '350px',
              backgroundImage: `url(${image1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '6px',
            }}
          />
        </SectionContainer>
      </motion.div>

      {/* Sekcja 2 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionContainer>
          <motion.div
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            style={{
              ...imageAnimation2,
              width: '50%',
              height: '350px',
              backgroundImage: `url(${image2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '6px',
            }}
          />
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0 20px',
            }}
          >
            <SectionTitle>Oprawa muzyczna eventów</SectionTitle>
            <SectionDescription>
              Profesjonalna oprawa muzyczna ślubów, pogrzebów, wszelkich uroczystości. Program do wyboru: muzyka klasyczna, muzyka rozrywkowa, program do ustalenia według spersonalizowanych potrzeb.
              Lekcje gry na trąbce, skrzypcach i fortepianie/keyboardzie dla dzieci, młodzieży i dorosłych wraz z teorią muzyki, nauką czytania nut itp.
            </SectionDescription>
          </div>
        </SectionContainer>
      </motion.div>

      {/* Sekcja 3 z filmem YT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionContainer>
          <div
            style={{
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '0 20px',
            }}
          >
            <SectionTitle>Zajęcia umuzykalniające dla najmłodszych</SectionTitle>
            <SectionDescription>
              "Odkryjemy razem magiczny świat muzyki! Zapraszamy wszystkie małe artystyczne duszki do naszych inspirujących lekcji muzyki. Skrzypce, trąbka, fortepian - wybierz instrument, który wzbudza Twoje serce i zanurz się w rytmach i dźwiękach. Uczymy z pasją i radością, aby Twoje dziecko odkryło swoje muzyczne talenty. Nasze lekcje są pełne zabawy i kreatywności, które rozwijają zdolności muzyczne, koncentrację i wyobraźnię."
            </SectionDescription>
          </div>
          <YoutubeVideo videoId="xlmyWyvpfkA" />
        </SectionContainer>
      </motion.div>
    </AboutUsContainer>
  );
};

export default Home;
