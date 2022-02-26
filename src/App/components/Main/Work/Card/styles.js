import styled from "styled-components";
import {BiRightArrowAlt} from "react-icons/bi";
import {bounceInUp } from "react-animations";
import { keyframes } from "styled-components";
import { BoxLightMode } from "../../../../../assets/styles";

const bounceInUpAnimation = keyframes`${bounceInUp}`;

const StyledWorkCard = styled.div`
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 1rem;
  animation: 1s ${bounceInUpAnimation};
  ${BoxLightMode(16)}
`;

const StyledWorkImg = styled.img`
  border-radius: 1rem;
  margin-bottom: .75rem;
`;

const StyledWorkTitle = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin-bottom: .25rem;
`;

const StyledWorkButton = styled.a`
  width: max-content;
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  column-gap: .25rem;
`;

const StyledWorkIcon = styled(BiRightArrowAlt)`

  font-size: 1rem;
  transition: .4s;

  ${StyledWorkButton}:hover > & {
    transform: translateX(.25rem);
  }

`;

export {
  StyledWorkCard,
  StyledWorkImg,
  StyledWorkTitle,
  StyledWorkButton,
  StyledWorkIcon
};