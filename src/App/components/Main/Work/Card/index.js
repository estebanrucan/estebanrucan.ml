import { StyledWorkButton, StyledWorkCard, StyledWorkIcon, StyledWorkImg, StyledWorkTitle } from "./styles";

function WorkCard({img, title, link}) {
  return ( 
    <StyledWorkCard>
      <StyledWorkImg src={img} alt={title} />

      <StyledWorkTitle>{title}</StyledWorkTitle>

      <StyledWorkButton href={link} target="_blank">
        Demo <StyledWorkIcon />
      </StyledWorkButton>
    </StyledWorkCard>
  );
}

export default WorkCard;