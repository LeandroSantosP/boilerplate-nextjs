import * as C from "./styles";

export const Main = () => {
  return (
    <C.Wrapper>
      <C.Logo
        src="/img/Reacjs.svg"
        alt="Logo ReactJs Amarelo com o texto React avançado escrit ao lado."
      />
      <C.Title>React Avançado</C.Title>
      <C.Description>
        TypeScript, ReactJS, NextJS, Styled Components
      </C.Description>
      <C.Illustration
        src="/img/SoftwareDeveloper.svg"
        alt="Um desenvolvedor programando em seu laptop."
      />
    </C.Wrapper>
  );
};
