import React from "react";
import {
  AboutUsContainer,
  AboutUsTitle,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  SectionImage,
} from "./HomeStyles.js";
import image1 from "../../images/music.png";
import image2 from "../../images/background1.png";

import YoutubeVideo from "./YoutubeVideo";

const Home = () => {
  return (
    <AboutUsContainer>
      {/* <AboutUsTitle></AboutUsTitle> */}

      {/* Sekcja 1 */}
      <SectionContainer>
        <SectionImage
          style={{
            backgroundImage: `url(${image1})`,
            width: "50%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        />
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 20px",
          }}
        >
          <SectionTitle>Oprawa muzyczna eventów</SectionTitle>
          <SectionDescription>
          Profesjonalna oprawa muzyczna ślubów, pogrzebów, wszelkich uroczystości. Program do wyboru: muzyka klasyczna, muzyka rozrywkowa, program do ustalenia według spersonalizowanych potrzeb.
            Lekcje gry na trąbce, skrzypcach i fortepianie/keyboardzie dla dzieci, młodzieży i dorosłych wraz z teorią muzyki, nauką czytania nut itp.
          </SectionDescription>
        </div>
      </SectionContainer>

      {/* Sekcja 2 */}
      <SectionContainer>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 20px",
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
        <SectionImage
          style={{
            backgroundImage: `url(${image2})`,
            width: "50%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "350px",
          }}
        />
      </SectionContainer>

      {/* Sekcja 3 z filmem YT */}
      <SectionContainer>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0 20px",
          }}
        >
          <SectionTitle>Zajęcia umuzykalniające dla najmłodszych</SectionTitle>
          <SectionDescription>"Odkryjemy razem magiczny świat muzyki! Zapraszamy wszystkie małe artystyczne duszki do naszych inspirujących lekcji muzyki. Skrzypce, trąbka, fortepian - wybierz instrument, który wzbudza Twoje serce i zanurz się w rytmach i dźwiękach. Uczymy z pasją i radością, aby Twoje dziecko odkryło swoje muzyczne talenty. Nasze lekcje są pełne zabawy i kreatywności, które rozwijają zdolności muzyczne, koncentrację i wyobraźnię. </SectionDescription>
        </div>
        <YoutubeVideo videoId="xlmyWyvpfkA" />
      </SectionContainer>

      
    </AboutUsContainer>
  );
};

export default Home;
