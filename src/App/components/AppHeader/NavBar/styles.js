import styled from "styled-components";
import { Container, devices } from "../../../assets/styles";
import {BiMoon, BiSun} from "react-icons/bi";


const StyledNavBar = styled.nav`
  ${Container}
  height         : var(--header-height);
  display        : flex;
  justify-content: space-between;
  align-items    : center;

  @media ${devices.xl} {
    height: calc(var(--header-height) + 1rem);
  }
`;

const StyledNavLogo = styled.a`
  color      : var(--first-color);
  font-weight: var(--font-medium);
  transition : .4s;
  :hover {
      color: var(--first-color-alt);
  }
`;

const StyledNavMenu = styled.div`
  position: fixed;
  bottom: 1rem;
  background-color: hsla(var(--second-hue), 32%, ${p => p.darkMode ? 16 : 90}%, .8);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  backdrop-filter: blur(10px);
  transition: 0.4s;

  @media ${devices.small} {
    padding: 1rem 1.5rem;
  }

  @media ${devices.medium} {
    width: 328px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const StyledNavDarkMode = styled(BiSun)`
  font-size: 1.25rem;
  cursor: pointer;
  transition: .3s;

  :hover {
    color: var(--first-color);
  }
`;

const StyledNavLightMode = styled(BiMoon)`
  font-size: 1.25rem;
  cursor: pointer;
  transition: .3s;

  :hover {
    color: var(--first-color);
  }
`;



export {
  StyledNavBar, 
  StyledNavLogo, 
  StyledNavMenu, 
  StyledNavList, 
  StyledNavDarkMode,
  StyledNavLightMode
};