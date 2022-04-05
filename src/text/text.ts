import styled from "styled-components";

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
`;

export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.cursiv};
`;

export const BlockSubTitle = styled(SubTitle)`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  margin-bottom: 10px;
  letter-spacing: 1.8px;
`;

export const BlockTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mediumLarge};
  line-height: 0.75;
  margin-bottom: 20px;
  font-weight: 400;
`;
export const TitleProfile = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 40px;
  text-align: center;
`