import React from "react";
import {
  AboutUsContainer,
  AboutUsTitle,
  SectionContainer,
  SectionTitle,
  SectionDescription,
  SectionImage,
} from "./AboutUsStyles";
import image1 from "../../images/karola.JPG";
import image2 from "../../images/my1.JPG";
import YoutubeVideo from "./YoutubeVideo";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <AboutUsTitle>Karolina i Wojtek</AboutUsTitle>

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
          <SectionTitle>Nasz zespół</SectionTitle>
          <SectionDescription>
            Absolwenci Akademii Muzycznej we Wrocławiu. Karolina prowadzi klasę skrzypiec w PSM I st. w Kłodzku, Wojtek prowadzi klasę trąbki w PSM I st. w Kłodzku i PSM I i II st. w Bystrzycy Kłodzkiej. Współpracujemy od 7 lat z agencją Artystyczną ProMusica, dzięki czemu stale zdobywamy doświadczenie i rozwijamy swoje umiejętności artystyczne. 
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
          <SectionTitle>"What a Wonderful World na trąbce - wykonanie na żywo"</SectionTitle>
          <SectionDescription>Przedstawiam Wam moje wykonanie utworu "What a Wonderful World" na trąbce. Ta piękna i nostalgiczna piosenka Louisa Armstronga zawsze mnie zachwyca swoją pozytywną energią i przekazem. Mam nadzieję, że moja interpretacja tego utworu także Was poruszy i przypomni, jak wspaniały może być ten świat, w którym żyjemy.</SectionDescription>
        </div>
        <YoutubeVideo videoId="xlmyWyvpfkA" />
      </SectionContainer>

      {/* Sekcja 4 z filmem YT */}
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
          <SectionTitle>Paul Anka - "My Way"</SectionTitle>
          <SectionDescription>Zapraszam do obejrzenia mojego wykonania utworu "My Way" na trąbce. Jest to jedna z najbardziej kultowych piosenek, którą postanowiłem zinterpretować w mojej aranżacji. Mam nadzieję, że spodoba Wam się moje wykonanie i że poczujecie magię tej niezapomnianej melodii. </SectionDescription>
        </div>
        <YoutubeVideo videoId="2P8ustIY8ro" />
      </SectionContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
