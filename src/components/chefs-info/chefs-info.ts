import styled from "styled-components";
import { FlexColumn } from "../../box/flex-box";

export const ChefsInfoWrapper = styled(FlexColumn)`
  width: calc(25% - 30px);
  text-align: center;

  :not(:last-child) {
    margin-right: 30px;
  }

  @media(max-width: 1024px){
    width: 50%;

    :not(:last-child) {
      margin-right: 0;
    }
  }

  @media(max-width: 768px){
    width: 100%;
  }
`;
export const ChefsInfoPhoto = styled.div<{ photo: string }>`
  height: 300px;
  width: 100%;
  background-image: ${(props) => props.photo};
  background-size: cover;

  @media(min-width: 2560px){
    height: 500px;
  }

  @media(max-width: 1024px){
    height: 400px;
    width: 80%;
  }

  @media(max-width: 768px){
    width: 60%;
  }

  @media(max-width: 426px){
    width: 100%;
  }

  @media(max-width: 376px){
    height: 300px;
  }
`;
export const ChefsInfoName = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  line-height: 1.2;
  margin-top: 25px;

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  }
`;
export const ChefsInfoPosition = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.2;
  margin-top: 6px;

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }
`;

