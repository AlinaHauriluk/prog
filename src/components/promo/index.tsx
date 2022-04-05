import type {FC} from "react";
import { Container } from "../../box/absolute-box";
import { FlexColumn } from "../../box/flex-box";
import { CSSProperties } from "styled-components";
import { PromoSection, SubTitlePromo, TitlePromo, Paragraph } from "./promo";

interface PromoProps {
  title: string;
  description?: string;
  particle?: string;
  style?: CSSProperties;
}

const Promo:FC<PromoProps> = ({
  title,
  description,
  particle,
  style,
}) => {
  return (
    <PromoSection
      style={{
        height: "560px",
        ...(style || {}),
      }}
    >
      <Container>
        <FlexColumn>
          <SubTitlePromo>The Venue {particle}</SubTitlePromo>
          <TitlePromo>{title}</TitlePromo>
          {description && <Paragraph>{description}</Paragraph>}
        </FlexColumn>
      </Container>
    </PromoSection>
  );
};

export default Promo;
