import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: #0b032d;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: 10rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
`;

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`;
