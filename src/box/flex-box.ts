import styled from "styled-components";
import { Container } from "./absolute-box";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;
export const FlexBox = styled.div`
  display: flex;
`
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const FlexColumnContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const FlexSpaceBetween = styled(Flex)`
  justify-content: space-between;
`;
export const FlexContainerSpace = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const FlexContainer = styled(Container)`
  display: flex;
  align-items: center;
`;
export const FlexCenter = styled(Flex)`
  justify-content: center;
`;

export const FlexJustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const FlexStartColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


