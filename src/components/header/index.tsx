import Nav from "../nav";
import {
  ButtonSecondary,
  HeaderSection,
  LogoTitle,
  LogoSubtitle,
  Button,
  FlipInX,
  ButtonWrapper,
  HeaderContainer
} from "./header";
import {FlexSpaceBetween} from '../../box/flex-box'

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <FlexSpaceBetween>
          <FlipInX>
            <LogoTitle>The Venue</LogoTitle>
            <LogoSubtitle>Restaurant</LogoSubtitle>
          </FlipInX>

          <Nav />

          <ButtonWrapper>
            <Button>Log In</Button>
            <ButtonSecondary>Sign Up</ButtonSecondary>
          </ButtonWrapper>
        </FlexSpaceBetween>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
