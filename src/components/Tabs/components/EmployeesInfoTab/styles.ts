import styled from "styled-components";

export const Cards = styled.div`
  padding: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
`;

export const Card = styled.div`
  padding: 30px 15px 10px;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  background: radial-gradient(circle, #2b2b2b, #0f0d0df7);
`;

export const CardAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 50%;
  box-shadow: #9f6ab9 0 0 10px;
  background-image: radial-gradient(
    circle at 50% -20.71%,
    #003460 0,
    #003263 6.25%,
    #003164 12.5%,
    #002f65 18.75%,
    #002c65 25%,
    #002a63 31.25%,
    #102661 37.5%,
    #25235d 43.75%,
    #321f59 50%,
    #3c1b54 56.25%,
    #45164e 62.5%,
    #4c1148 68.75%,
    #510b41 75%,
    #55063b 81.25%,
    #580233 87.5%,
    #5b002c 93.75%,
    #5c0025 100%
  );
`;
