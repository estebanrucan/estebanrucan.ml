import styled from "styled-components";

const StyledAboutBox = styled.div`
  background-color: var(--container-color);
  border-radius: .75rem;
  padding: .75rem .5rem;
`;

const StyledAboutTitle = styled.h3`
  font-size: var(--small-font-size);
`;

const StyledAboutSubtitle = styled.span`
  font-size: var(--tiny-font-size);

`;

export {
  StyledAboutBox,
  StyledAboutTitle,
  StyledAboutSubtitle
};