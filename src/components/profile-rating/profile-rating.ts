import styled from "styled-components";
import { FlexCenter, FlexSpaceBetween } from "../../box/flex-box";

export const ProfileRatingDish = styled(FlexCenter)<{photo: string}>`
  width: 250px;
  height: 200px;
  background-image: ${props => props.photo};
  background-position: center;
  background-size: cover;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  flex-wrap: wrap;

  @media(max-width: 1024px){
    width: 300px;
    height: 200px;
  }

  @media(max-width: 321px){
    width: 280px;
    height: 200px;
  }
`
export const ProfileRatingContainer = styled(FlexSpaceBetween)`
  @media(max-width: 1024px){
    flex-direction: column;
  }
`
export const ProfileRatingTitle = styled.h4`
  backdrop-filter: blur(5px);
  padding: 5px;
  width: 80%;
  margin-top: 80px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`