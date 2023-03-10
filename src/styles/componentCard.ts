import styled from "styled-components";

export const ContainerCardDefault = styled.div`
  width: 200px;
  padding: 1.5rem 0 2rem 0;

  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(212, 212, 212, 0.5);
  border-radius: 8px;

  transition: 0.1s;

  :hover {
    scale: calc(1.05);
  }
`;

export const ContainerSelect = styled.div`
  width: 200px;
  padding: 1.5rem 0 2rem 0;

  background-color: blueviolet;
  border: 1px solid rgba(212, 212, 212, 0.5);
  border-radius: 8px;

  transition: 0.1s;

  :hover {
    scale: calc(2.05);
  }
`;

export const ParticipantCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 300px;

  cursor: pointer;
`;

export const TittleCard = styled.h2`
  text-align: center;
  font-size: 2rem;

  &:first-of-type {
    margin: 8px;
  }
`;

export const ImgCard = styled.img`
  margin-top: 1rem;
  border-radius: 8px;
  max-height: 172px;
`;
