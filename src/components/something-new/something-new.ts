import styled from "styled-components";

import { FlexCenter } from "../../box/flex-box";

export const SomethingNewFlex = styled(FlexCenter)`
  margin-top: 20px;

  @media(max-width: 426px){
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const SomethingNewText = styled.p`
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.mediumSmall};
  color: ${({ theme }) => theme.colors.colorText};
  line-height: 1.8;
  text-align: justify;

  :first-child {
    margin-right: 40px;
  }

  @media(min-width: 2560px){
    font-size: ${({ theme }) => theme.fontSize.mediumMedium};
  }

  @media(max-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.small};
    line-height: 1.6;
    text-align: left;
  }

  @media(max-width: 426px){
    width: 100%;
    text-align:justify;
  }
`;
