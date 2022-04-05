import styled from "styled-components";
import { Flex } from "../../box/flex-box";

export const CartBodyProductWrapper = styled(Flex)`
  @media(max-width: 426px){
    flex-direction: column;
    align-items: flex-start;
  }
`
export const CartBodyProductPhoto = styled.div<{ photo: string }>`
  width: 340px;
  height: 200px;
  background-image: ${(props) => props.photo};
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  @media(max-width: 768px){
    width: 140px;
    height: 100px;
  }

  @media(max-width: 426px){
    width: 100px;
    height: 80px;
  }
`;
export const CartBodyProductTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  margin-left: 20px;
  width: 40%;

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  }

  @media(max-width: 426px){
    width: 100px;
    margin-left: 0;
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;