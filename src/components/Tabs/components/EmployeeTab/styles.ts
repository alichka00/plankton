import styled from "styled-components";

export const Card = styled.div`
  padding: 10px;
  height: 270px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: radial-gradient(circle, #2b2b2b, #0f0d0df7);
`;

export const CardWrap = styled.div`
  display: flex;
  justify-content: start;
`;

export const CardItem = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const CardAvatar = styled.img`
  width: 100px;
  height: 100px;
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

export const CardInf = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 18px;
  width: 200px;
  padding: 15px;
`;
