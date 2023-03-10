import styled from "styled-components";

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  color: white;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardSpan = styled.span`
  font-size: 1.5rem;
`;

export const TittleCard = styled.h2`
  margin: 2.5rem 0;

  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  line-height: 100%;

  text-align: center;
  letter-spacing: -1px;
`;

export const ContainerCard = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  > div {
    position: relative;

    span {
      display: flex;
      align-items: center;
      gap: 4px;

      position: absolute;
      top: -2rem;
      z-index: 1;
    }
  }
`;

