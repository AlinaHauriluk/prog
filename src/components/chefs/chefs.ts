import styled from "styled-components";
import { SectionContainer } from "../../box/absolute-box";
import { FlexCenter } from "../../box/flex-box";

export const ChefSection = styled(SectionContainer)`
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const ChefWrapper = styled(FlexCenter)`
  flex-wrap: wrap;

  @media(max-width: 1024px){
    justify-content: space-between;
  }
`
