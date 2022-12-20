import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    max-width: 32rem;
    margin: 0 auto 1.5rem;
    line-height: 1.4;
  }
`;
