import React from 'react';
import {
  YoungsContainer,
  YoungsSection,
  YoungsImage,
  YoungsTitle,
  YoungsDescription,
  YoungsList,
  YoungsListItem,
} from './YoungsStyles';
import image from '../../images/youngs.jpg';

const Youngs = () => {
  return (
    <YoungsContainer>
      <YoungsSection>
        <div>
          <YoungsTitle>Zajęcia muzyczne dla dzieci w wieku przedszkolnym</YoungsTitle>
          <YoungsDescription>
            Czy wiecie, że nauka muzyki ma niezwykły wpływ na rozwój Waszych maluszków? Zajęcia muzyczne dla dzieci w wieku przedszkolnym to nie tylko wspaniała zabawa, ale także doskonały sposób na rozwijanie zdolności twórczych i umysłowych.
            <YoungsList>
              <h3>Dajemy Twojemu dziecku szansę na:</h3>
              <YoungsListItem>Rozwinięcie zdolności słuchowych i muzycznych.</YoungsListItem>
              <YoungsListItem>Wyrażanie emocji poprzez muzykę.</YoungsListItem>
              <YoungsListItem>Wzmocnienie koordynacji ruchowej.</YoungsListItem>
              <YoungsListItem>Rozwijanie kreatywności i wyobraźni.</YoungsListItem>
              <YoungsListItem>Naukę współpracy w grupie.</YoungsListItem>
            </YoungsList>
            Dodatkowo, nasza oferta zajęć muzyki obejmuje różnorodne instrumenty, takie jak skrzypce, trąbka, fortepian, keyboard i wiele innych! Nasze zajęcia są prowadzone w przyjaznej i bezpiecznej atmosferze, która sprzyja kreatywnemu rozwojowi dzieci. Wierzymy, że każde dziecko ma swój muzyczny talent, który zasługuje na odkrycie i rozwijanie.
            Dołączcie do naszej muzycznej przygody i dajcie swojemu dziecku szansę na naukę, zabawę i odkrywanie swojego artystycznego potencjału! Zapiszcie je na zajęcia muzyki już dziś!
          </YoungsDescription>
        </div>
        <YoungsImage src={image} alt="Youngs" />
        

      </YoungsSection>
    </YoungsContainer>
  );
};

export default Youngs;
