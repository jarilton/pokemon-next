import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  border: 2px solid #e33d33;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
  background-color: #333333;
  color: #ffffff;

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 29%;
  }

  @media (min-width: 1440px) {
    width: 23%;
  }
`;

export const Number = styled.div`
  margin: 1rem 0;
  background-color: #e33d33;
  border-radius: 5px;
  padding: 5px 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Details = styled.div`
  background-color: #ffffff;
  color: #222222;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.4s ease-in-out;

  &:hover {
    //transform: scale(1.1);
    background-color: #e33d33;
    color: #ffffff;
  }
`;
