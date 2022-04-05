import styled from "styled-components";

export const Star = styled.span`
  cursor: pointer;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;

  ::before {
    content: "\u2605";
    font-size: ${({ theme }) => theme.fontSize.mediumLarge};
    color: "red";
  }

  :hover {
    ::before {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
