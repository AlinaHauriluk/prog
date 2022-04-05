import styled from "styled-components";
import { Map } from "react-yandex-maps";

export const ContactMapSection = styled.div`
  padding-bottom: 60px;

  @media(max-width: 376px){
    margin-top: -20px;
    padding-bottom: 40px;
  }
`
export const ContactMapInfo = styled(Map)`
  width: 100%;
  height: 350px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};

  @media(max-width: 426px){
    height: 250px;
  }

  @media(max-width: 321px){
    height: 200px;
  }
`
