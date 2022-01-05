import styled from "styled-components";

interface isClicked {
  isClicked: boolean;
}
export const CardDiv = styled.div`
  background-color: ${(props) => (props.theme === "light" ? "white" : "black")};
  color: ${(props) => (props.theme === "light" ? "black" : "white")};
  margin: 50px 0;
  font-size: 0.8rem;
  width: 280px;
  height: auto;
  min-height: 360px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 22px;
  font-family: "Roboto", sans-serif;
  position: relative;
`;

export const BoldSpan = styled.span<isClicked>`
  font-size: ${(props) => (props.isClicked ? "1.4rem" : "0.9rem")};
`;

export const Span = styled.span`
  margin-bottom: 1rem;
`;

export const StartSpan = styled.span`
  position: absolute;
  left: 25px;
  bottom: 20px;
`;

export const SpanEmail = styled.span`
  font-weight: lighter;
  color: gray;
  margin: 5px 0 10px 0;
`;
export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;
