import styled from "styled-components";

const CardTemplate = styled.div`
  margin: auto;
  padding: 5px;
  border-radius: 0.5em;
`;

const Card = function Card(prop) {
  return (
    <CardTemplate className={prop.className}>{prop.children}</CardTemplate>
  );
};
export default Card;
