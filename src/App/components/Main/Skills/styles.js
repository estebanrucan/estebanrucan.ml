import styled from "styled-components";
import { Container, Grid } from "../../../../assets/styles";
import { StyledSection } from "../styles";


const StyledSkillsSection = styled(StyledSection)`

`;

const StyledSkillsContainer = styled.div`
  ${Container}
  ${Grid}
  row-gap: 2rem;
  padding-top: 1rem;

`;

const StyledSkillsContent = styled.div`
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 1.25rem;
`;

const StyledSkillsTitle = styled.h3`
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  color: var(--first-color);
  text-align: center;
  margin-bottom: 1.5rem;
`;


const StyledSkillsBox = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 2.5rem;
`;

const StyledSkillsGroup = styled.div`
  display: grid;
  align-content: flex-start;
  row-gap: 1rem;
`;

export {
  StyledSkillsSection,
  StyledSkillsContainer,
  StyledSkillsContent,
  StyledSkillsTitle,
  StyledSkillsBox,
  StyledSkillsGroup
};