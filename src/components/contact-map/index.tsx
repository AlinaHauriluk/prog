import {useEffect} from "react";
import { ContactMapInfo, ContactMapSection } from "./contact-map";
import { YMaps, Placemark } from "react-yandex-maps";
import { Container } from "../../box/absolute-box";
import AOS from "aos";
import "aos/dist/aos.css";
import { coordinates } from "../../config/contacts";

const ContactMap = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <ContactMapSection>
      <Container>
      <YMaps>
          <ContactMapInfo
            defaultState={{ center: [35.1815784, -120.7474753], zoom: 8}}
            data-aos="flip-down"
          >
            <Placemark geometry={coordinates} options={{iconColor: "#b49383"}} properties={{iconCaption: 'The Venue Restaurant'}} />
          </ContactMapInfo>
      </YMaps>
      </Container>
    </ContactMapSection>
  );
};

export default ContactMap;
